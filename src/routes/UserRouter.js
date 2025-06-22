import express from 'express';
import UserController from '../controllers/UserController.js';

class UserRouter {
    constructor() {
        this.router = express.Router();
        this.userController = new UserController();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post('/signup', this.userController.createUser);
        this.router.post('/login', this.userController.loginUser);
        this.router.get('/', this.userController.getUsers);
    }
}

const userRouter = new UserRouter().router;
export { userRouter };