/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { router as userRouter } from './User/User';
import { router as rateRouter } from './Rate/Rate'

module.exports = (app: any) =>  {
    app.use('/users', userRouter);
    app.use('/rate', rateRouter);
};
