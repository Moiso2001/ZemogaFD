import express from 'express';
import mongoose from 'mongoose';
import { postCards } from './controllers/cardController';
import dataArray from './controllers/utils';

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

// Start the server
app.listen(port, () => {
  postCards(dataArray);
  console.log(`Server running on http://localhost:${port}`);
});