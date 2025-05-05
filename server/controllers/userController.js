/*************************************************************************
 * File : userController.js
 * Author : Tushar
 * Date Created : 26 Apr 2025
 * Purpose : controlled class for user Authentication, token generation and payment
 **************************************************************************************/

const AccessToken = require("../models/accessToken");
const User = require("../models/user");
const finvasiaServices = require("../services/finvasiaServices");
const zerodhaServices = require("../services/zerodhaServices");


/**********************************
 * Function to get user details 
 ********************************/
const getUserDetails = async (req, res) => {
    try {
        const userData = req.user;
        res.status(200).json({ data: userData });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error while getting User Details",
            data: error
        });
    }
}

/***********************************************
 * Function to validate shoonya AccessToken
 *******************************************/
const generateShoonyaToken = async (req, res) => {
    try {
        const { userId, brokerName, clientId, password, totp, apiKey, vendorCode, imei } = req.body;

        const loginStatus = await finvasiaServices.loginFinvasia(clientId, password, totp, apiKey, vendorCode, imei);
        if (loginStatus.status == "success") {

            const userToken = loginStatus.userToken;
            try {
                // Enter the usertoken in to database
                await AccessToken.create({ userId, brokerName, clientId, userToken });
                res.status(200).json({ message: loginStatus.message });
            } catch (error) {
                res.status(500).json({
                    message: "Internal server error while saving usertoken",
                    data: error
                });
            }
        } else {
            res.status(400).json({ status: "success", message: loginStatus.message });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal server error while generating token for Shoonya User",
            data: error
        });
    }
}

/***********************************************
 * Function to get Zerodha login URL
 *******************************************/
const getZerodhaLoginUrl = async (req, res) => {
    try {
        const { apiKey } = req.body;
        const urlResp = await zerodhaServices.fetchLoginUrl(apiKey);
        res.status(200).json({
            status: "success",
            url: urlResp
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error while fetching z-login url for client",
            data: error
        });
    }
}

/***********************************************
 * Function to generate Zerodha user token
 *******************************************/
const generateKiteSession = async (req, res) => {
    try {
        const { userId, brokerName, clientId, apiKey, apiSecret, reqToken } = req.body;
        const respToken = await zerodhaServices.generateKiteSession(apiKey, apiSecret, reqToken);
        const userToken = respToken.access_token;
            try {
                // Enter the usertoken in to database
                await AccessToken.create({ userId, brokerName, clientId, userToken });
                res.status(200).json({ message: "Usertoken is generated successfully" });
            } catch (error) {
                res.status(500).json({
                    message: "Internal server error while saving Z-usertoken",
                    data: error
                });
            }
    } catch (error) {
        res.status(500).json({
            message: "Internal server error while generating Zerodha user token",
            data: error
        });
    }
}

module.exports = { getUserDetails, generateShoonyaToken, getZerodhaLoginUrl, generateKiteSession };