import express from 'express';
import JobController from '../controllers/JobController.js';

class JobRouter {
    constructor() {
        this.router = express.Router();
        this.jobController = new JobController();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', this.jobController.getJobs);
        this.router.post('/', this.jobController.createJob);
    }
}

const jobRouter = new JobRouter().router;
export { jobRouter };