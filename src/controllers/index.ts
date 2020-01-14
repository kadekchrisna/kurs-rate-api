import { UserController } from './User/User';
import { Rate } from './Rate/RateController';

const userController = new UserController();
const rateController = new Rate();

export {
    userController,
    rateController
};
