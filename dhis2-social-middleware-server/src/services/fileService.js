// src/services/fileService.js
import fs from 'fs';
import { jsPDF } from 'jspdf';
import Papa from 'papaparse';

const fileService = {
  generateCSV(reportData) {
    // Generate CSV file from report data using PapaParse
    return Papa.unparse(reportData, {
      header: true,
      skipEmptyLines: true,
    });
  },
  
  generatePDF(reportData) {
    // Generate PDF file from report data using jsPDF
    const doc = new jsPDF();
    // Example: doc.text('Hello world!', 10, 10);
    return doc.output('arraybuffer');
  },

  downloadCSV(csvData) {
    const fileName = 'output.csv';
    const filePath = `/tmp/${fileName}`;
    fs.writeFileSync(filePath, csvData);
  },

  downloadPDF(pdfData) {
    const fileName = 'output.pdf';
    const filePath = `/tmp/${fileName}`;
    fs.writeFileSync(filePath, pdfData);
  }
};

export default fileService;
