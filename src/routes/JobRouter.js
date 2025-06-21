import express from 'express';
import JobController from '../controllers/JobController.js';
import { JobValidator } from '../middlewares/JobValidator.js';

class JobRouter {
    constructor() {
        this.router = express.Router();
        this.jobController = new JobController();
        this.jobValidator = new JobValidator();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', this.jobController.getJobs);
        this.router.post('/', this.jobValidator.validateJobCreation, this.jobController.createJob);
    }
}

const jobRouter = new JobRouter().router;
export { jobRouter };