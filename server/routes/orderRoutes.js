import express from 'express'
import { createOrder, deleteOrder, getAllOrders, getMonthlyRevenues, getUserOrder, updateOrder } from '../controllers/orderController.js';
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../verifyToken.js';


const router = express.Router();

    // Routes...
    // Create Order...
    router.post('/', verifyToken, createOrder)
    
    // Update Order...
    router.put('/:id', verifyTokenAndAdmin, updateOrder)

    // Delete Order...
    router.delete('/:id', verifyTokenAndAdmin, deleteOrder)
    
    // Get User Order...
    router.get('/find/:userId', verifyTokenAndAuthorization, getUserOrder)
    
    // Get All Orders...
    router.get('/find', verifyTokenAndAdmin, getAllOrders)
    
    // Get Monthly Revenues...
    router.get('/revenues', verifyTokenAndAdmin, getMonthlyRevenues)

export default router;