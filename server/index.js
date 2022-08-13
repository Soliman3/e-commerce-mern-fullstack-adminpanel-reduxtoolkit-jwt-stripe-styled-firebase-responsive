import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'

// app configuration...
const app = express();
const Port = process.env.PORT || 5000 ;
dotenv.config(); // configuration of dotenv...


// midlewares...
app.use(cors()); // to handle cross origin requests...
app.use(express.json());


// database configuration...
const Connection = ()=>{
    mongoose.connect(process.env.MONGO).then(() => {
        console.log('connected to db successfuly')
    }).catch((error) => { throw error })
}



// api routes...



// listen to server...
app.listen(Port, () => {
    Connection()
    console.log(`Server running successfuly on Port ${Port}`)
})