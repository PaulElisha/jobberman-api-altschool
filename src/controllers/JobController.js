import JobService from '../services/JobService.js';


class JobController {
    constructor() {
        this.jobService = new JobService();
    }

    createJob = async (req, res) => {
        try {
            const job = await this.jobService.createJob(req.body);
            res.status(201).json({
                status: "ok", messsage: "Job created successfully", data: job
            });
        } catch (error) {
            res.status(error.statusCode).json({ status: "error", error: error.message });
        }
    }

    getJobs = async (req, res) => {
        try {
            const jobs = await this.jobService.getJobs(req.query);
            res.status(201).json({ status: "ok", data: jobs });
        } catch (error) {
            res.status(error.statusCode).json({ status: "error", error: error.message });
        }
    }
}

export default JobController;