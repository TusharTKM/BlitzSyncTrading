/***********************************
 * File : user.js
 * Author : Tushar
 * Date Created : 18 Apr 2025
 * Purpose : mongoDB user schema for new users
 *******************************************/
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    pancard: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    brokerName : { type: String, required: true},
    clientId : { type: String, required: true},
    apiKey : { type: String, default: "" },
    apiSecret : { type: String, default: "" },
    vendorCode : { type: String, default: "" },
    imei : { type: String, default: "" },
    userToken : { type: String, default: "" }
}, {
    timestamps: true
});

// Password encryption with bcrypt
userSchema.pre('save', async function (next) {
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password, saltRound);
        this.password = hashPassword;
    } catch (error) {
        next(error);
    }
});

// JSON web token
userSchema.methods.generateJWToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            isAdmin: this.isAdmin
        }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
    } catch (error) {
        return ""
    }
}

const User = new mongoose.model("User", userSchema);

module.exports = User;