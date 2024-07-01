// Controller for webhook functionality
// src/controllers/webhookController.js
import reportService from '../services/reportService';
import fileService from '../services/fileService';
import telegramService from '../services/telegramService';
import whatsappService from '../services/whatsappService';

const webhookController = {
  async processWebhook(req, res) {
    const { reportId, telegramId, whatsappId, format } = req.body;

    try {
      // Fetch report data from DHIS2
      const reportData = await reportService.fetchReport(reportId);

      // Generate files based on requested format (CSV, PDF)
      if (format === 'csv' || !format) {
        const csvData = fileService.generateCSV(reportData);
        fileService.downloadCSV(csvData);
        if (telegramId) await telegramService.sendCSV(csvData, telegramId);
        if (whatsappId) await whatsappService.sendCSV(csvData, whatsappId);
      }

      if (format === 'pdf' || !format) {
        const pdfData = fileService.generatePDF(reportData);
        fileService.downloadPDF(pdfData);
        if (telegramId) await telegramService.sendPDF(pdfData, telegramId);
        if (whatsappId) await whatsappService.sendPDF(pdfData, whatsappId);
      }

      res.status(200).send('Webhook processed successfully');
    } catch (error) {
      console.error('Error processing webhook:', error);
      res.status(500).send('Internal server error');
    }
  }
};

export default webhookController;
