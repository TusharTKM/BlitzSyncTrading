/******************************************************
 * File : finvasiaServices.js
 * Author : Tushar
 * Date Created : 18 Apr 2025
 * Purpose : Services and Function to connect to FV's API
 ***************************************************************/
const axios = require('axios');
const sha256 = require("crypto-js/sha256");

const fvHostAddress = process.env.FV_HOST_ADDRESS;

/******************************************************************/
/******* Function to post request to FV server using Axios ********/
/******************************************************************/
const postRequest = (aRroute, aParams, aUserToken = "") => {
    let url = fvHostAddress + aRroute;
    let payload = 'jData=' + JSON.stringify(aParams);
    payload = payload + `&jKey=${aUserToken}`;
    return axios.post(url, payload);
}

/******************************************************************/
/******* Function to login to FV server and generate userToken *****/
/******************************************************************/
const loginFinvasia = async (clientId, password, totp, apiKey, vendorCode, imei) => {
    try {
        const appKey = clientId + "|" + apiKey;
        const encPassword = sha256(password).toString();
        const encAppKey = sha256(appKey).toString();

        // Create the login params
        let loginData = {
            "source": "API",
            "apkversion": "js:1.0.0",
            "uid": clientId,
            "pwd": encPassword,
            "factor2": totp,
            "vc": vendorCode,
            "appkey": encAppKey,
            "imei": imei
        };

        // Post request to authenticate the user and generate user token
        let loginResponse = await postRequest("/QuickAuth", loginData);
        if (loginResponse.data.stat == "Ok") {
            return ({
                status : "success",
                message: "User Token is generated",
                userToken: loginResponse.data.susertoken
            });
        } else {
            return ({
                status : "failure",
                message: loginResponse.data.emsg,
                userToken: ""
            });
        }
    } catch (error) {
        return ({
            status : "failure",
            message: "Error while generating user token",
            userToken: ""
        });
    }
};

module.exports = { loginFinvasia }
