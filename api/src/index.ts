import express from 'express';
import mongoose from 'mongoose';
import { postCards } from './controllers/cardController';
import dataArray from './controllers/utils';
import router from './routes';

const app = express();
const port = 3000;

// MongoDB connection string (replace "<password>" with the actual password)
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
  console.log(`Server running on http://localhost:${port}`);
});