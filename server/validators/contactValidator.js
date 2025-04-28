/***********************************
 * File : contactValidator.js
 * Author : Tushar
 * Date Created : 26 Apr 2025
 * Purpose : zod validators for contact Page
 *******************************************/

const { z } = require("zod");


const contactSchema = z.object({
    name: z
        .string({ required_error: "Please enter your name" })
        .trim()
        .min(4, { message: "Name must be minimum 4 characters long" })
        .max(64, { message: "Name must not be more than 64 characters long" }),
    email: z
        .string({ required_error: "Please enter your email address" })
        .trim()
        .email({ message: "This doesn’t look like a valid email (e.g., user@domain.com)." })
        .min(4, { message: "email must be minimum 4 characters long" })
        .max(64, { message: "email must not be more than 64 characters long" }),
    message: z
        .string({ required_error: "Please share your question or feedback—we’re all ears!" })
        .trim()
        .min(2, { message: "Your message seems too brief. Could you add more details?" })
})

module.exports = { contactSchema };