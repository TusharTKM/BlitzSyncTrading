/******************************************************
 * File : zerodhaServices.js
 * Author : Tushar
 * Date Created : 04 May 2025
 * Purpose : Services and Function to connect to Zerodha's API
 ***************************************************************/

const KiteConnect = require("kiteconnect").KiteConnect;

/**************************************
 * Function to fetch Zerodha Login URL
 ****************************************/
const fetchLoginUrl = async (apiKey) => {
    try {
        const kc = new KiteConnect({ api_key: apiKey });
        return kc.getLoginURL();
    } catch (error) {
        return error;
    }
}

/**************************************
 * Function to generate Zerodha session
 ****************************************/
const generateKiteSession = async (apiKey, apiSecret, reqToken) => {
    try {
        const kc = new KiteConnect({ api_key: apiKey });
        const tokenResp = await kc.generateSession(reqToken, apiSecret);
        return tokenResp;
    } catch (error) {
        return error;
    }
}

module.exports = { fetchLoginUrl, generateKiteSession };