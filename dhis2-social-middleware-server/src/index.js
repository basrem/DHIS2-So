// Entry point for the Express server
// src/index.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import webhookRoute from './routes/webhook';

dotenv.config();
const app = express();

app.use(bodyParser.json());

// Define webhook route
app.use('/webhook', webhookRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
