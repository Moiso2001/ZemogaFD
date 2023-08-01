// 
//    _ooOoo_
//    o8888888o
//    88" . "88
//    (| -_- |)
//    O\  =  /O
// ____/`---'\____
// .'  \\|     |//  `.
// /  \\|||  :  |||//  \
// /  _||||| -:- |||||_  \
// |   | \\\  -  /'| |   |
// | \_|  `\`---'//  |_/ |
// \  .-\__ `-. -'__/-.  /
// ___`. .'  /--.--\  `. .'___
// ."" '<  `.___\_<|>_/___.' _> \"".
// | | :  `- \`. ;`. _/; .'/ /  .' ; |
// \  \ `-.   \_\_`. _.'_/_/  -' _.' /
// ===========`-.`___`-.__\ \___  /__.-'_.'_.-'================
// `=--=-'                    
// Buda to have blessed this server


/* Express and Mongoose */
import express from 'express';
import mongoose from 'mongoose';

/* Controllers */
import { postCards } from './controllers/cardController';
import dataArray from './controllers/utils';

/* Routes */
import router from './routes';

/* Cors */
import cors from "cors";

/* DotEnv */
import dotenv from "dotenv";

dotenv.config();  

const app = express();
const port = process.env.PORT || 3001;

/* Enabling all origins to make request */
app.use(cors());

// MongoDB connection string (This must be on .env file but to make the thins easier for this test I just leave it here in case is needed).
const connectionString = 'mongodb+srv://moisesplatadev:Lila%401212@zemogadb.vszvisc.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Middlewares
app.use(express.json());

// Routes
app.use('/', router)

// Start the server
app.listen(port, () => {
  console.log(`Server running on ${process.env.URL}:${process.env.PORT}`)
});