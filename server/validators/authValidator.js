/***********************************
 * File : authValidators.js
 * Author : Tushar
 * Date Created : 26 Apr 2025
 * Purpose : zod validators for authentication page (registration/login)
 *******************************************/
const { z } = require("zod");

const registerSchema = z.object({
    name: z
        .string({ required_error: "Please enter your name" })
        .trim()
        .min(4, { message: "Name must be minimum 4 characters long" })
        .max(64, { message: "Name must not be more than 64 characters long" }),
    email: z
        .string({ required_error: "Please enter your email" })
        .trim()
        .email({ message: "Please enter a valid email address" })
        .min(4, { message: "email must be minimum 4 characters long" })
        .max(64, { message: "email must not be more than 64 characters long" }),
    phone: z
        .string({ required_error: "Please enter your phone number" })
        .trim()
        .regex(/^[+]?[\d\s-]+$/, { message: "Phone number contains invalid characters" })
        .min(10, { message: "Phone number must be minimum 10 characters long" })
        .max(10, { message: "Phone must not be more than 10 characters long" }),
    pancard: z
        .string({ required_error: "Please enter your pancard" })
        .trim()
        .min(10, { message: "Pancard number must be minimum 10 characters long" }),
    password: z
        .string({ required_error: "Please enter your password" })
        .trim()
        .min(6, { message: "Password must be minimum 6 characters long" })
        .max(64, { message: "Password must not be more than 64 characters long" }),
    brokerName: z
        .string({ required_error: "Please enter your broker's name" })
        .trim()
        .min(3, { message: "Broker's Name number must be minimum 3 characters long" }),
    clientId: z
        .string({ required_error: "Please enter your client Id" })
        .trim()
        .min(3, { message: "Client Id must be minimum 3 characters long" }),
    apiKey: z
        .string({ required_error: "Please enter your API Key" })
        .trim()
        .min(3, { message: "API key must be minimum 3 characters long" }),
    apiSecret: z.string().optional().default(""),
    vendorCode: z.string().optional().default(""),
    imei: z.string().optional().default("")
});

const loginSchema = z.object({
    email: z
        .string({ required_error: "Please enter your email" })
        .trim()
        .email({ message: "Please enter a valid email address" })
        .min(4, { message: "email must be minimum 4 characters long" })
        .max(64, { message: "email must not be more than 64 characters long" }),
    password: z
        .string({ required_error: "Please enter your password" })
        .trim()
        .min(6, { message: "Password must be minimum 6 characters long" })
        .max(64, { message: "Password must not be more than 64 characters long" })
});

module.exports = { registerSchema, loginSchema };