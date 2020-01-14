import express, { Request, Response } from 'express';
import { userController } from '../../controllers';
import {middlewareController} from '../Middleware/index';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    userController.create(req, res);
});

router.get('/', [middlewareController.printName], (req: Request, res: Response) => {
    userController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    userController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    userController.delete(req, res);
});