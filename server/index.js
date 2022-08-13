import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

// app configuration...
const app = express();
dotenv.config()

// midlewares...

// database configuration...
const Connection = ()=>{
    mongoose.connect(process.env.MONGO).then(() => {
        console.log('connected to db successfuly')
    }).catch((error) => { throw error })
}
// listen to server...
const Port = process.env.PORT;

app.listen(Port, () => {
    Connection()
    console.log(`Server running successfuly on Port ${Port}`)
    
})