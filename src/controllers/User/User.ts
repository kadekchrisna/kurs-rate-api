/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { CrudController } from '../CrudController';

export class UserController extends CrudController {

    constructor() {
        super()
    }

    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }    

    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): object {
        return res.json({message: "OK"});
    }
    
    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
    
    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}