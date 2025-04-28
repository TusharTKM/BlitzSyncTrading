/***********************************
 * File : contact.js
 * Author : Tushar
 * Date Created : 23 Apr 2025
 * Purpose : mongoDB user schema for contact messages
 *******************************************/
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
}, {
    timestamps: true
});

const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;