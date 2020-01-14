import express, { Request, Response } from 'express';
import { rateController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.get('/', (req:Request, res: Response) => {
    rateController.getRate(req, res)
});

