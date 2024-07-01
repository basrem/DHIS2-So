 // Service for Telegram integration
 // src/services/telegramService.js
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

const telegramService = {
  async sendCSV(csvData, chatId) {
    const form = new FormData();
    form.append('chat_id', chatId);
    form.append('document', fs.createReadStream('/tmp/output.csv'));
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendDocument`, form, {
      headers: form.getHeaders(),
    });
    fs.unlinkSync('/tmp/output.csv');
  },

  async sendPDF(pdfData, chatId) {
    const form = new FormData();
    form.append('chat_id', chatId);
    form.append('document', fs.createReadStream('/tmp/output.pdf'));
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendDocument`, form, {
      headers: form.getHeaders(),
    });
    fs.unlinkSync('/tmp/output.pdf');
  }
};

export default telegramService;
