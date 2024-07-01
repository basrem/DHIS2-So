// Utility for generating CSV files
// src/utils/generateCSV.js
import Papa from 'papaparse';

const generateCSV = (data) => {
  return Papa.unparse(data, {
    header: true,
    skipEmptyLines: true,
  });
};

export default generateCSV;
