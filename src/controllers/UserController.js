import UserService from '../services/UserService.js';


class UserController {
    constructor() {
        this.userService = new UserService();
    }

    createUser = async (req, res) => {
        try {
            const jobData = req.body;
            const job = await this.userService.createJob(jobData);
            res.status(201).json({
                status: "ok", data: job
            });
        } catch (error) {
            res.status(500).json({ status: "error", error: error.message });
        }
    }

    getUsers = async (req, res) => {
        try {
            const jobs = await this.userService.getJobs();
            res.status(201).json({ status: "error", data: jobs });
        } catch (error) {
            res.status(500).json({ status: "error", error: error.message });
        }
    }
}

export default UserController;