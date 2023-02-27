import mongoose from "mongoose";

const configDB = async()=>{
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect('mongodb://localhost:27017/login-signup');
        console.log('DB Connected...');
    } catch (error) {
        console.log("Database not connected...");
    }
}

export default configDB;