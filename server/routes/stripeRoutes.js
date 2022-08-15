import express from 'express'
import { chargeClient } from '../controllers/stripeController.js'



const router = express.Router()

// Stripe Routes...

router.post('/payment', chargeClient)


export default router;