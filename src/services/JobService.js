import { Job } from '../models/Job.js'

class JobService {
    constructor() {
    }

    createJob = async (data) => {
        const foundOne = await Job.findOne({ title: data.title });
        if (foundOne) {
            throw new Error('Job with this title already exists');
        }
        const job = await Job.create(job);
        return job
    }

    getJobs = async () => {
        const jobs = await Job.find({});
        if (!jobs || jobs.length === 0) {
            throw new Error('No jobs found');
        }
        return jobs;
    }
}

export default JobService;