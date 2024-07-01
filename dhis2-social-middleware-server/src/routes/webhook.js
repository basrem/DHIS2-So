// Route handling webhook requests
// src/routes/webhook.js
import express from 'express';
import webhookController from '../controllers/webhookController';

const router = express.Router();

// POST /webhook
router.post('/', webhookController.processWebhook);

export default router;
