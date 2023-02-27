import ModelSignup from "../model/SignupModel.js"

export const login = async(req, res) => {
    try {
        const {username,password} = req.body;
        const user = await ModelSignup.findOne({username:username,password:password});
        if(user !== null){
            res.send("Login Successfully");
            console.log("Login Successfully");
        }else{
            res.send("Username or password are not matched..")
            console.log("Username or password are not matched..");
        }
    } catch (error) {
        res.send({ "error": "Error While Login.." })
    }
}