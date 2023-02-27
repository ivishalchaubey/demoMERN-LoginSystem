import ModelSignup from "../model/SignupModel.js";

export const Home = async(req,res)=>{
    try {
        const data = await ModelSignup.find();
        res.send(data)
    } catch (error) {
        console.log("Can't fetch Home Page..");
        res.send("Can't fetch All Users..")
    }
}