import express from 'express'
import { singin, singup } from '../controllers/authenticationController.js';



const router = express.Router();

// Create New User...
router.post('/signup', singup)

// Sing In...
router.post('/signin', singin)


export default router;