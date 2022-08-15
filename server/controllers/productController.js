import Product from '../models/ProductModel.js'
import { createError } from '../error.js'


// Product controllers...
// Add new product...
export const createProduct = async (req, res, next) => {
    // catch all req.body for new product...
    const newProduct = new Product(req.body)
    try {
        const savedNewProduct = await newProduct.save()
        res.status(201).json(savedNewProduct)
    } catch (error) {
        next(error)
    }
}

// Update product...
export const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
}

// Get product...
export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
}

// Get all products...
export const getAllProducts = async (req, res, next) => {
    // intialize queries...
    const queryNew = req.query.new
    const queryCategory = req.query.category
    try {
        // condition on let variable to change when if conditions changed for products
        let products;
        // in case of find query new comming in params > find the all products and sort them by created date and then limit them by one...
        if (queryNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1)
        // else in case of finding query category > find all products with filtering category by the givien name in parmas...
        } else if (queryCategory) {
            products = await Product.find({ category: { $in: [queryCategory] } })
        // else return all products without any conditions or queries...
        } else {
            products = await Product.find()
        }
        // then sending json response by products...
        res.status(200).json(products)
        
    } catch (error) {
        // handle error if catched...
        next(error)
    }
}