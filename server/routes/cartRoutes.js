import express from 'express'
import { createCart, deleteCart, getAllCarts, getUserCart, updateCart } from '../controllers/cartController.js';
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../verifyToken.js';


const router = express.Router();

    // Routes...
    // Create Cart for any user logged in user...
    router.post('/', verifyToken, createCart)

    // Update Cart...
    router.put('/:id', verifyTokenAndAuthorization, updateCart)

    // Delete Cart...
    router.delete('/:id', verifyTokenAndAuthorization, deleteCart)
    
    // Get User Cart by userId...
    router.get('/find/:userId', verifyTokenAndAuthorization, getUserCart)
    
    // Get All Carts...
    router.get('/find', verifyTokenAndAdmin, getAllCarts)


export default router;