const ExcelJS = require('exceljs');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const dummyData = require('./data');

// Generate Excel File
async function generateExcel() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Dummy Data');

  worksheet.columns = [
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
    { header: 'Age', key: 'age' },
  ];

  //map to add rows
  dummyData.map(item => worksheet.addRow(item));

  await workbook.xlsx.writeFile('dummy-data.xlsx');
  console.log('Excel file generated: dummy-data.xlsx');
}

//Generate PDF File
function generatePDF() {
  const doc = new PDFDocument({ margin: 50 });
  const writeStream = fs.createWriteStream('dummy-data.pdf');
  doc.pipe(writeStream);

  // Title
  doc.fontSize(18).text('Dummy Data List', { align: 'center', underline: true });
  doc.moveDown(1);

  // Header
  doc.fontSize(12).font('Helvetica-Bold');
  doc.text('Name', 50, doc.y, { continued: true });
  doc.text('Email', 200, doc.y, { continued: true });
  doc.text('Age', 400);
  doc.moveDown(0.5);
  doc.moveTo(50, doc.y).lineTo(500, doc.y).stroke();

  // Rows
  doc.font('Helvetica');
  dummyData.map(item => {
    doc.text(item.name, 50, doc.y, { continued: true });
    doc.text(item.email, 200, doc.y, { continued: true });
    doc.text(String(item.age), 400);
  });

  doc.end();
  console.log('✅ PDF file generated with fixed column layout.');
}


//Run both
async function generateFiles() {
  await generateExcel();
  generatePDF();
}

generateFiles();
