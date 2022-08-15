import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_KEY)


export const chargeClient = async (req, res, next) => {
    try {
        await stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd"
        }, (stripeErr, stripeRes) => {
            //if there are an error
            if (stripeErr) {
                next(stripeErr)
            } else {
                res.status(200).json(stripeRes)
            }
        })
    } catch (error) {
        next(error)
    }
}