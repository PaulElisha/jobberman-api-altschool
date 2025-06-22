import { Schema, model } from "mongoose";

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['full-time', 'part-time', 'contract', 'internship'],
    },
    mode: {
        type: String,
        required: true,
        enum: ['on-site', 'remote', 'hybrid'],
    },
    experience: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive', 'pending'],
        default: 'pending'
    },
    industry: {
        type: String,
        required: true
    },
    expiryData: {
        type: Date,
        required: true
    },
    website: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});



const Job = model('Job', jobSchema);
export { Job };