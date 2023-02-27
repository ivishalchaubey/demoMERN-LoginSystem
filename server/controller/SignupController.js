import ModelSignup from "../model/SignupModel.js"

export const signup = async (req, res) => {
    try {
        const { username, fullName, email, password, gender, dob } = req.body;

        const USERNAME = await ModelSignup.findOne({ username: username });
        const EMAIL = await ModelSignup.findOne({ email: email });

        if (!USERNAME) {
            if (!EMAIL) {
                const data = ModelSignup({
                    username,
                    email,
                    dob,
                    gender,
                    fullName,
                    password
                });
                const response = await data.save();
                res.send("Signup Successfully..")
            } else {
                console.log("Email Already Exist..");
                res.send("Email Already Exist..")
            }

        } else {
            console.log("Username Already Exist..");
            res.send("Username Already Exist..")
        }

    } catch (error) {
        res.send("Error While Signup")
    }
}