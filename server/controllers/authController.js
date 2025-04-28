/***********************************
 * File : authController.js
 * Author : Tushar
 * Date Created : 18 Apr 2025
 * Purpose : controlled class for authenticaion router
 *******************************************/
const User = require("../models/user");
const finvasiaServices = require("../services/finvasiaServices");
const bcrypt = require("bcryptjs");

/************************************
 * Function to register new user
 ***********************************/
const register = async (req, res) => {

    try {
        let { name, email, phone, pancard, password,
            brokerName, clientId, apiKey, apiSecret, vendorCode, imei } = req.body;

        // check for user with existing email id
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            res.status(409).json({ message: "Sorry, the email already exists" });
        } else {
            const newUser = await User.create({ name, email, phone, pancard, password, brokerName, clientId, apiKey, apiSecret, vendorCode, imei });
            res.status(201).json({
                message: "User registration is successful",
                userId: newUser._id.toString()
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal server error on user registration",
            data: error
        });
    }
};

/************************************
 * Function to Login existing Users
*************************************/
const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        // check for user with existing email id
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            const isPasswordMatching = await bcrypt.compare(password, userExists.password);
            const jwToken = await userExists.generateJWToken();
            if (isPasswordMatching && jwToken != "") {
                res.status(200).json({
                    message: "login is succeessful for " + email,
                    jwToken: jwToken,
                    userId: userExists._id.toString()
                })
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            res.status(400).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal server error on user login",
            data: error
        });
    }
};


module.exports = { register, login };