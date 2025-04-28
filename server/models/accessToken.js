/***********************************
 * File : accessToken.js
 * Author : Tushar
 * Date Created : 18 Apr 2025
 * Purpose : mongoDB user schema for accessToken
 *******************************************/

const mongoose = require("mongoose");

const AccessTokenSchema = new mongoose.Schema({
    userId: { type: String, required: true},
    brokerName : { type: String, required: true},
    clientId : { type: String, required: true},
    userToken : { type: String, default: "" }
}, {
    timestamps: true
});

const AccessToken = new mongoose.model("AccessToken", AccessTokenSchema);
module.exports = AccessToken;