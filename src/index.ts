
import express from 'express';
import moment from 'moment';
import { PORT } from './config/constants';


const app = express();
app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('./routes/index')(app);

export {
  app,
  PORT,
};
