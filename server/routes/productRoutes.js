import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/productController.js';
import { verifyToken, verifyTokenAndAdmin } from '../verifyToken.js';


const router = express.Router();

    // Routes...
    // Create New Product...
    router.post('/', verifyTokenAndAdmin, createProduct)
    
    // Delete a Product...
    router.delete('/:id', verifyTokenAndAdmin, deleteProduct)

    // Update Product...
    router.put('/:id', verifyTokenAndAdmin, updateProduct)
    
    // Get Product...
    router.get('/find/:id', getProduct)
    
    // Get All Products...
    router.get('/find', getAllProducts)


export default router;