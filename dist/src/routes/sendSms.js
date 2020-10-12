"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const twilio_config_1 = require("../config/twilio-config");
const router = express();
router.post("/sendSms", (req, res) => {
    const { body, to, from, } = req.body;
    twilio_config_1.default.messages.create({
        body: body,
        to: to,
        from: from // From a valid Twilio number
    })
        .then((message) => {
        return res.status(200).json({
            success: message
        });
    }).catch(err => {
        if (err) {
            return res.status(400).json({
                failed: err
            });
        }
    });
});
exports.default = router;
