import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
//
import {getTrendsPerTime, getAllTrends} from './trendingData.js';


const PORT = 5000;
const URL_DB = 'mongodb://localhost:27017/';

const app = express();

let server;

mongoose.set('strictQuery', true);

app.use(express.json());
app.use('/api/', router);

export const startApp = async () => {
    getAllTrends()
    try {
        await mongoose.connect(URL_DB + 'trends')
        server = app.listen(PORT, console.log('serwer started on port ' + PORT))
    } catch(error) {
        console.error(error)
    }
}

export const stopServer = async () => {
    server.close()
}

getTrendsPerTime(600000);
startApp();