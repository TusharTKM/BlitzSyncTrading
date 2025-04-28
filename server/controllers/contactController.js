/***********************************
 * File : contactController.js
 * Author : Tushar
 * Date Created : 23 Apr 2025
 * Purpose : controlled class for contact router
 *******************************************/

const Contact = require("../models/contact");

/************************************
 * Function to save new contact message
 ***********************************/

const storeContactMessages = async (req, res) => {
    try {
        let { name, email, message } = req.body;
        await Contact.create({ name, email, message });
        res.status(201).json({ message: "Your message is sent successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error while saving your message",
            data: error
        });
    }
}

module.exports = storeContactMessages