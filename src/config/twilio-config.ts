// import config for twilio
import config from '../../config';

// Account Sid and Auth Token from twilio.com/console
const TWILIO_ACCOUNT_SID = config.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = config.TWILIO_AUTH_TOKEN;

// require twilio and initialize with creds --- helper library from https://www.twilio.com/docs/node/install
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export default client;
