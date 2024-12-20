import { User } from "../modules/User.module.js";

export const userRegister = async (req, res) => {
    const { fullName, email, mobileNumber, password } = req.body;
    const newUser = await User.create({
        fullName,
        email,
        mobileNumber,
        password
    });
    
    if (!newUser) return res.status(401).json({
        message: "Can't create new User"
    });

    res.status(201).send(newUser);
};

export const allUser = async (req, res) => {
    const allUser = await User.find({});
    res.status(200).send(allUser);
}

export const userDelete = async (req, res) => {
    // console.log("", req.params.id);
    // await User.findByIdAndDelete("6749acbc6c9d659393e95f1d");
    
    res.status(200).json({ "message": "success", "id": "6749acbc6c9d659393e95f1d" });
}