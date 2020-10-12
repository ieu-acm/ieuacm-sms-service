
import * as express from 'express';
import client from "../config/twilio-config";

const router = express();


router.post(
    "/sendSms",
    (req: express.Request, res: express.Response) => {
        const {
            body,
            to,
            from,
        }: {
            body: string;
            to: string;
            from: number;
        } = req.body;

        client.messages.create({
            body: body,
            to: to,  // Text this number
            from: from // From a valid Twilio number
        })
            .then((message) => {
                return res.status(200).json({
                    success: message
                })
            }).catch(err => {
                if (err) {
                    return res.status(400).json({
                        failed: err
                    })
                }
            });
    }
);


export default router;