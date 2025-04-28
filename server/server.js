/***********************************
 * File : server.js
 * Author : Tushar
 * Date Created : 18 Apr 2025
 * Purpose : main server file to include library and start the server.
 *******************************************/
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./router/authRouter");
const userRouter = require("./router/userRouter");
const contactRouter = require("./router/contactRouter");
const connectDB = require("./utils/db");
const errorMiddlleWare = require("./middlewares/errorMiddleware");

const app = express();

// set cors Options
const corsOption = {
    origin : "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}

// middleware
app.use(errorMiddlleWare);
app.use(cors(corsOption));
app.use(express.json());

// Routers
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/user", userRouter)

const PORT = 5000;

// Connect to the DB and start the server
connectDB().then(()=> {
    app.listen(PORT, () => {
        console.log(`server is running at port : ${PORT}`);
    });
});
