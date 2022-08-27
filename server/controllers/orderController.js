import Order from '../models/OrderModel.js'
import { createError } from '../error.js'


// Order controllers...
// Create Order...
export const createOrder = async (req, res, next) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)    
    } catch (error) {
        next(error)
    }
}

// Update Order...
export const updateOrder = async (req, res, next) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedOrder)
    } catch (error) {
        next(error)
    }
}

// Delete Order...
export const deleteOrder = async (req, res, next) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("ORDER HAS BEEN DELETED")
    } catch (error) {
        next(error)
    }
}

// Get User Order by userId...
export const getUserOrder = async (req, res, next) => {
    try {
        const userOrder = await Order.find({ userId: req.params.userId })
        res.status(200).json(userOrder)
    } catch (error) {
        next(error)
    }
}

// Get All Orders...
export const getAllOrders = async (req, res, next) => {
    try {
        const usersOrders = await Order.find()
        res.status(200).json(usersOrders)
    } catch (error) {
        next(error)
    }
}

// Get Monthly Revenues...
export const getMonthlyRevenues = async (req, res, next) => {
    // current date...
    const date = new Date()
    // last month from current date...
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    // last two month...
    const previousTwoMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))     
    
    try {
        const revenues = await Order.aggregate([
            { $match: { createdAt: { $gte: previousTwoMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                    directCost: "$directCost",
                },
            },    
                { $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                    directCost: { $sum: "$directCost"},
                        },
                },
        ]);
        res.status(200).json(revenues)
    } catch (error) {
        next(error)
    }
}
