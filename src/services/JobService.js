import { Job } from '../models/Job.js'

class JobService {

    createJob = async (data) => {
        const foundOne = await Job.findOne({ title: data.title });
        if (foundOne) {
            const error = new Error('Job with this title already exists');
            error.statusCode = 400;
            throw error;
        }
        const job = await Job.create(data);
        if (!job) {
            const error = new Error('Job creation failed');
            error.statusCode = 500;
            throw error;
        }
        return job
    }

    getJobs = async (data) => {
        const jobs = await Job.find(data);
        if (jobs.length === 0) {
            const error = new Error('No jobs found');
            error.statusCode = 404;
            throw error;
        }
        return jobs;
    }
}

export default JobService;