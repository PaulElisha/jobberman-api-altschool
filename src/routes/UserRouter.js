import express from 'express';
import UserController from '../controllers/UserControllers.js';

class UserRouter {
    constructor() {
        this.router = express.Router();
        this.userController = new UserController();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', this.userController.getUsers);
        this.router.post('/', this.userController.createUser);
    }
}

const userRouter = new UserRouter().router;
export { userRouter };