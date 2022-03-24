"use strict";

const PORT = 8080;
// Module
const express = require('express');
const server = express();

// Routing
const home = require("./routes/home");

// Set app
server.set("views", "./views");
server.set("view engine", "ejs");

server.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = server;