import joi from 'joi';

class JobValidator {
    validateJobCreation = async (req, res, next) => {
        try {
            const schema = joi.object({
                title: joi.string().required(),
                description: joi.string().required(),
                location: joi.string().required(),
                salary: joi.string().optional(),
                company: joi.string().optional(),
                role: joi.string().valid('Full-time', 'Part-time', 'Contract', 'Internship').required(),
                mode: joi.string().valid('On-site', 'Remote', 'Hybrid').required(),
                experience: joi.string().required(),
                industry: joi.string().required(),
                expiryData: joi.date().required(),
                website: joi.string().required()
            });
            const { error, } = schema.validate(req.body);
            if (!error) {
                next();
            } else {
                res.status(400).json({
                    status: "error",
                    error: error.details[0].message
                });
            }
        } catch (error) {
            res.status(400).json({
                status: "error",
                error: error.message
            });
        }

    }
}

export { JobValidator }