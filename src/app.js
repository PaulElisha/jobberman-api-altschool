import express from 'express';
import { config } from "dotenv";
config({ path: "../.env" });
import { jobRouter } from './routes/JobRouter.js';
import { userRouter } from './routes/UserRouter.js';
import { connectDB } from './config/connectDb.js';

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const MONGODB_URI = process.env.MONGODB_URI;

class App {
    constructor() {
        this.Dbconnection = new connectDB();
        this.app = express();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    initializeRoutes() {
        this.app.use('/jobs', jobRouter);
        this.app.use('/users', userRouter);
    }

    startServer() {
        this.app.listen(port, () => {
            console.log(`Server running at http://${hostname}:${port}`);
        });
    }
}

const app = new App();
app.startServer();