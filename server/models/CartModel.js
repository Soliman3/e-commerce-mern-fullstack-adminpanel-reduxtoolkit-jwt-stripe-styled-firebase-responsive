// intialize Cart Schema...

import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ]
},
    { timestamps: true}
);

// exporting Cart model...
export default mongoose.model('Cart', CartSchema)