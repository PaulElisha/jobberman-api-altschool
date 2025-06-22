import UserService from '../services/UserService.js';


class UserController {
    constructor() {
        this.userService = new UserService();
    }

    createUser = async (req, res) => {
        try {
            const { user, token } = await this.userService.createUser(req.body);
            res.status(201).json({
                success: true, message: "User created successfully", data: { user: user, token: token }
            });
        } catch (error) {
            console.error("Error in createUser:", error);
            res.status(error.statusCode).json({ success: false, error: error.message });
        }
    }


    loginUser = async (req, res) => {
        try {
            const { user, token } = await this.userService.loginUser(req.body);
            res.status(200).json({
                success: true, message: "User logged in successfully", data: { user: user, token: token }
            });
        } catch (error) {
            res.status(error.statusCode).json({ success: false, error: error.message });
        }
    }

    getUsers = async (req, res) => {
        try {
            const users = await this.userService.getUsers();
            res.status(201).json({ success: true, data: users });
        } catch (error) {
            res.status(error.statusCode).json({ success: false, error: error.message });
        }
    }
}

export default UserController;