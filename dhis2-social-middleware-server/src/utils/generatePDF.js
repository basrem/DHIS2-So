// Utility for generating PDF files
// src/utils/generatePDF.js
import { jsPDF } from 'jspdf';

const generatePDF = (data) => {
  const doc = new jsPDF();
  // Example: doc.text('Hello world!', 10, 10);
  return doc.output('arraybuffer');
};

export default generatePDF;
