/******************************************************
 * File : authRouter.js
 * Author : Tushar
 * Date Created : 18 Apr 2025
 * Purpose : Routers for user authentication/registration and token generation
 ***************************************************************/

const express = require("express");
const authController = require("../controllers/authController");
const {loginSchema, registerSchema} = require("../validators/authValidator");
const validate = require("../middlewares/validateMiddleware");

const router = express.Router();

router.route("/register").post(validate(registerSchema), authController.register);
router.route("/login").post(validate(loginSchema), authController.login);

module.exports = router;