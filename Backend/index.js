import express from 'express';  
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 4550;
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);

