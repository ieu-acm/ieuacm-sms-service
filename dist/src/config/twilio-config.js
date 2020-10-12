"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import config for twilio
const config_1 = require("../../config");
// Account Sid and Auth Token from twilio.com/console
const TWILIO_ACCOUNT_SID = config_1.default.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = config_1.default.TWILIO_AUTH_TOKEN;
// require twilio and initialize with creds --- helper library from https://www.twilio.com/docs/node/install
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
exports.default = client;
