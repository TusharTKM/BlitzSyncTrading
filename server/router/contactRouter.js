/******************************************************
 * File : contactRouter.js
 * Author : Tushar
 * Date Created : 23 Apr 2025
 * Purpose : Routers for user contact message
 ***************************************************************/

const express = require("express");
const storeContactMessages = require("../controllers/contactController");
const validate = require("../middlewares/validateMiddleware");
const { contactSchema } = require("../validators/contactValidator");

const contactRouter = express.Router();
contactRouter.route("/contact").post(validate(contactSchema), storeContactMessages);

module.exports = contactRouter;
