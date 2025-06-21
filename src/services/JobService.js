import { Job } from '../models/Job.js'

class JobService {

    createJob = async (data) => {
        const foundOne = await Job.findOne({ title: data.title });
        if (foundOne) {
            throw new Error('Job with this title already exists');
        }
        const job = await Job.create(data);
        if (!job) {
            throw new Error('Job creation failed');
        }
        return job
    }

    getJobs = async (data) => {
        const jobs = await Job.find(data);
        if (jobs.length === 0) {
            throw new Error('No job found');
        }
        return jobs;
    }
}

export default JobService;