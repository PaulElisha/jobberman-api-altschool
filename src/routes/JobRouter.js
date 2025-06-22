import express from 'express';
import JobController from '../controllers/JobController.js';
import { JobValidator } from '../middlewares/JobValidator.js';
import { UserAuthorization } from '../middlewares/AuthorizeUser.js';

class JobRouter {
    constructor() {
        this.router = express.Router();
        this.jobController = new JobController();
        this.jobValidator = new JobValidator();
        this.userAccess = new UserAuthorization();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', this.userAccess.authorizeUser, this.jobController.getJobs);
        this.router.post('/', this.userAccess.authorizeUser, this.jobValidator.validateJobCreation, this.jobController.createJob);
    }
}

const jobRouter = new JobRouter().router;
export { jobRouter };