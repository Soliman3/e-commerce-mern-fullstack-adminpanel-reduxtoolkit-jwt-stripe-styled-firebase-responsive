import express from 'express'
import { updateUser, deleteUser, getUser, getAllUsers, getUserStatus } from '../controllers/userController.js';
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../verifyToken.js';



const router = express.Router();


// update user for admin or user owner...
router.put('/:id', verifyTokenAndAuthorization, updateUser)

// delete user...
router.delete('/:id', verifyTokenAndAuthorization, deleteUser)

// get user...
router.get('/find/:id', verifyTokenAndAdmin, getUser)

// get all users...
router.get('/', verifyTokenAndAdmin, getAllUsers)

// get user status...
router.get('/status', verifyTokenAndAdmin, getUserStatus)

export default router