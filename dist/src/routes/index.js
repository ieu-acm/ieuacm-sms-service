"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express();
router.get("/", (_, res) => {
    res.send("Welcome to Izmir University of Economics ACM Student Chapter SMS Service");
});
exports.default = router;
