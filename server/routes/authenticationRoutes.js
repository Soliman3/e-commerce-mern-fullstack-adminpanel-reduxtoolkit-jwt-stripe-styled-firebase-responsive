import express from 'express'
import { singin, singup } from '../controllers/authenticationController.js';



const router = express.Router();

// Create New User...
router.post('/singup', singup)

// Sing In...
router.post('/singin', singin)


export default router;