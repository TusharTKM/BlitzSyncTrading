/***********************************
 * File : db.js
 * Author : Tushar
 * Date Created : 18 Apr 2025
 * Purpose : database class to connect to mongoDB server
 *******************************************/
const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

/******************************
 * Function to connect to DB
 ********************************/
const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database connection is established");
    } catch (error) {
        console.log("Database connection has failed");
        process.exit(0);
    }
};

module.exports = connectDB;