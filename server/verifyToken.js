import jwt from 'jsonwebtoken'
import { createError } from './error.js';

export const verifyToken = async (req, res, next) => {
    const authHeader = await req.headers.token;
    if (!authHeader) return next(createError(401, "not authenticated"));
    const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) return next(createError(403, "token not valid"));
            req.user = user;
            next()
        })
}
    
export const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin){
            next()
        } else {
            res.status(403).json("You don't have AUTHORIZATION for such action")
        }
    })
}

export const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("You don't have AUTHORIZATION for such action")
        }
    })
}