import express from 'express';
import passport from 'passport';

import { jobRouter } from './src/routes/JobRouter.js';
import { authRouter } from './src/routes/authRouter.js';
import { connectDB } from './src/config/connectDb.js';
import { jwtconfig } from './src/config/authConfig.js';


import { config } from "dotenv";
config({ path: ".env" });

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const MONGODB_URI = process.env.MONGODB_URI;

class App {
    constructor() {
        this.dbConnected = new connectDB();
        this.app = express();
        this.jwtConfig();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    jwtConfig() {
        const { jwtStrategy, localLoginStrategy, localSignupStrategy } = jwtconfig;
        passport.use(jwtStrategy)
        passport.use('signup', localSignupStrategy);
        passport.use('login', localLoginStrategy);
    }

    initializeRoutes() {
        this.app.use("/", authRouter)
        this.app.use('/jobs', passport.authenticate("jwt", { session: false }), jobRouter);
    }

    startServer() {
        this.app.listen(port, () => {
            console.log(`Server running at http://${hostname}:${port}`);
        });
    }
}

const app = new App();
app.startServer();