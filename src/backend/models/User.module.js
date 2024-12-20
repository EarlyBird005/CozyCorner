import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
// userSChema.plugin(mongooseAggregatePaginate); // to write complex queries mostly used in the more complex modules not in the user module

const userSChema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Name is required."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
        lowercase: true,
        trim: true,
        index: true // might usefull for querying 
    },
    mobileNumber: {
        type: String,
        required: [true, "Mobile Number is required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        select: false
    },
    address: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Addresses"
        }
    ],
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Orders"
        }
    ],
    refreshToken: {
        type: String
    }
}, { timestamps: true });

userSChema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); // this pre hook get skipped if we aren't saving or updating the password
    this.password = bcrypt.hash(this.password, 8);
    next();
});

userSChema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSChema.methods.generateAccessToken = function () {
    // short lived access token
    jwt.sign( // algorithm (default: HS256)
    {
        _id: this._id,
        email: this.email
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });
}

userSChema.methods.generateRefreshToken = function () {
    // short lived access token
    this.refreshToken = jwt.sign(
    {  
        _id: this._id,
    }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });
}

export const User = mongoose.model("User", userSChema);