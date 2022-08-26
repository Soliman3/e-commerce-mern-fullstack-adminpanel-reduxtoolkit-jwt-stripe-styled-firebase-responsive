import User from '../models/UserModel.js'
import bcrypt from 'bcryptjs'
import { createError } from '../error.js'
import jwt from 'jsonwebtoken'


// Create New user controller...
export const singup = async (req, res, next) => {
    // encrypting password...
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // Creating constant for caching new user request data with encrypted password...
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: hash,
    })

    try {
        // saving data in db with json response by new saved user data...
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        next(error)
    }
}


// Sing in Controller...
export const singin = async (req, res, next) => {
    try {
        // check for username in mongo db...
        const user = await User.findOne({ username: req.body.username })
        // if not found user send Error message with status 401...
        if (!user) return next(createError(401, "USER NOT FOUND IN DB"))
        // decoding password and check it...
        const hashedPassword = await bcrypt.compare(req.body.password, user.password)
        // if password mismatched then send Error message with status 400 ...
        if (!hashedPassword) return next(createError(400, "WRONG PASSWORD"))
        // intialize user token throw user _id and user isAdmin and send jwt...
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SEC,
            { expiresIn: '1d' }
        );
        // exclude password from response...
        const { password, ...other } = user._doc
        // // response by user data without password and incluse accessToken...
        res.status(200).json({...other, accessToken})
    } catch (error) {
        next(error)
    }
}