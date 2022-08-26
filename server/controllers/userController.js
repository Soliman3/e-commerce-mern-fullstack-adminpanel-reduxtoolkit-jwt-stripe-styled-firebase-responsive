import User from '../models/UserModel.js'
import { createError } from '../error.js'
import bcrypt from 'bcryptjs'


// User controllers...
// Update User...
export const updateUser = async (req, res, next) => {
        
    if (req.body.password) {
        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(req.body.password, salt);
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}

// Delete User...
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User has been deleted successfuly')
    } catch (error) {
        next(error)
    }
}

// Get User...
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...other } = user._doc
        res.status(200).json(other)
    } catch (error) {
        next(error)
    }
}

// Get All Users...
export const getAllUsers = async (req, res, next) => {
    const query = req.query.latest
    try {
        const users = query? await User.find().sort({username: -1}).limit(4) : await User.find()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

// Get User Status...
export const getUserStatus = async (req, res, next) => {
    // get current date...
    const date = new Date()
    // get the last two year date from current date...
    const twoYearsAgo = new Date(date.setFullYear(date.getFullYear() - 2))
    
    try {
        const data = await User.aggregate([
            // get period greater than from two years ago...
            { $match: { createdAt: { $gte: twoYearsAgo } } },
            // passes to the next stage " month from createdAt field "...
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            // finally grouping the result according $month by grouping of total summation...
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        // response by data in json formate...
        res.status(200).json(data)
    } catch (error) {
        // catch error...
        next(error)
    }
}