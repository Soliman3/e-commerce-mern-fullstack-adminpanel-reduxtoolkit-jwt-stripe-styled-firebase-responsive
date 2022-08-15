import Cart from '../models/CartModel.js'
import { createError } from '../error.js'


// Create Cart controllers..
// Create Cart For Any Logged in User...
export const createCart = async (req, res, next) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = newCart.save()
        res.status(201).json(savedCart)
    } catch (error) {
        next(error)
    }
}

// Update Cart...
export const updateCart = async (req, res, next) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedCart)
    } catch (error) {
        next(error)
    }
}

// Delete Cart...
export const deleteCart = async (req, res, next) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("CART HAS BEEN DELETED")
    } catch (error) {
        next(error)
    }
}

// Get User Cart by userId...
export const getUserCart = async (req, res, next) => {
    try {
        const userCart = await Cart.findOne({userId: req.params.userId})
        res.status(200).json(userCart)
    } catch (error) {
        next(error)
    }
}

// Get All Carts...
export const getAllCarts = async (req, res, next) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        next(error)
    }
}