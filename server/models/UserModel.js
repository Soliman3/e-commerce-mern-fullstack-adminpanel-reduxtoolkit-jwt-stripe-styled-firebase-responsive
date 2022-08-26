// intialize User Schema...

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:false,
    },
    lastName: {
        type: String,
        required:false,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true }
);

// exporting User model
export default mongoose.model('User', UserSchema)