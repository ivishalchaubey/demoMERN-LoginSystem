import mongoose from "mongoose";
const date = Date();

const signupSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, rquired: true, trim: true },
    fullName: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: String, required: true },
});

const ModelSignup = mongoose.model('user', signupSchema);

export default ModelSignup;