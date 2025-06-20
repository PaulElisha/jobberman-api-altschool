import { Job } from '../model/Job.js'

class JobService {
    constructor() {
    }

    createJob = (job) => {
        const foundOne = Job.findOne({ title: job.title });
        if (foundOne) {
            throw new Error('Job with this title already exists');
        }
        const job = Job.create(job);
        return job
    }

    getJobs = () => {
        const jobs = Job.find({});
        if (!jobs || jobs.length === 0) {
            throw new Error('No jobs found');
        }
        return jobs;
    }
}

export default JobService;