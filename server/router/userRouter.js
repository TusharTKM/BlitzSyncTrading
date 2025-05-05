/******************************************************
 * File : userROuter.js
 * Author : Tushar
 * Date Created : 18 Apr 2025
 * Purpose : Routers for user authentication and token generation
 ***************************************************************/

const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/getUser").get(authMiddleware, userController.getUserDetails);
router.route("/generateShoonyaToken").post(userController.generateShoonyaToken);
router.route("/getZerodhaLoginUrl").post(userController.getZerodhaLoginUrl);
router.route("/generateKiteSession").post(userController.generateKiteSession);


//.route("/update").post(userController.updateUser);

module.exports = router;