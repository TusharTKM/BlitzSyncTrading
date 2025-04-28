/******************************************************
 * File : authMiddleware.js
 * Author : Tushar
 * Date Created : 19 Apr 2025
 * Purpose : Middleware for authentication and user token validation
 ***************************************************************/

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authMiddleware = async (req, res, next) => {

    // Receive the token from header
    const bearerToken = req.header("Authorization");

    if(!bearerToken) {
        res.status(401).json({
            message: "Unauthorized HTTP, token is not provided"
        });
    }

    // Remove bearer from token
    const jwToken = bearerToken.replace("Bearer", "").trim();

    try {
        const decodedToken = jwt.verify(jwToken, process.env.JWT_SECRET_KEY);

        // fetch user details from database
        const userDetails = await User.findOne({_id : decodedToken.userId}).select({password: 0});

        // custom propert
        req.user = userDetails;
        req.token = bearerToken;
        req.userId = userDetails._id;

        next();
    } catch (error) {
        res.status(401).json({message: "Unauthorized access!! Invalid token"})
    }
}

module.exports = authMiddleware;