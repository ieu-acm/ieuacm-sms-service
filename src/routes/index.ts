
import * as express from 'express';

const router = express();

router.get("/", (_: express.Request, res: express.Response): void => {
  res.send("Welcome to Izmir University of Economics ACM Student Chapter SMS Service");
});


export default router;