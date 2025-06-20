import UserService from '../services/UserService.js';


class UserController {
    constructor() {
        this.jobService = new JobService();
    }

    createJob = async (req, res) => {
        try {
            const jobData = req.body;
            const job = await this.jobService.createJob(jobData);
            res.status(201).json({
                status: "ok", data: job
            });
        } catch (error) {
            res.status(500).json({ status: "error", error: error.message });
        }
    }

    getJobs = async (req, res) => {
        try {
            const jobs = await this.jobService.getJobs();
            res.status(201).json({ status: "error", data: jobs });
        } catch (error) {
            res.status(500).json({ status: "error", error: error.message });
        }
    }
}

export default JobControllers;