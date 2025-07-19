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
    { header: 'Place', key: 'place' },
  ];

  dummyData.map(item => worksheet.addRow(item));

  await workbook.xlsx.writeFile('dummy-data.xlsx');
  console.log('Excel file generated: dummy-data.xlsx');
}


// Generate PDF File in Table Format
function generatePDF() {
  const doc = new PDFDocument({ margin: 50 });
  const writeStream = fs.createWriteStream('dummy-data.pdf');
  doc.pipe(writeStream);

  // Title
  doc.fontSize(18).text('Dummy Data List', { align: 'center', underline: true });
  doc.moveDown(2);

  // Set starting Y position
  const startY = doc.y;
  const rowHeight = 25;
  const columnSpacing = [50, 150, 350,450]; 

  // Table headers
  doc.fontSize(12).font('Helvetica-Bold');
  doc.text('Name', columnSpacing[0], startY);
  doc.text('Email', columnSpacing[1], startY);
  doc.text('Age', columnSpacing[2], startY);
  doc.text('Place', columnSpacing[3], startY);

  doc.moveTo(50, startY + 18).lineTo(550, startY + 18).stroke();

  // Table rows
  doc.font('Helvetica');
  dummyData.map((item, index) => {
    const y = startY + 25 + index * rowHeight;
    doc.text(item.name, columnSpacing[0], y);
    doc.text(item.email, columnSpacing[1], y);
    doc.text(String(item.age), columnSpacing[2], y);
    doc.text(item.place, columnSpacing[3], y);
  });

  doc.end();
  console.log('PDF file generated: dummy-data.pdf');
}

// Run both
async function generateFiles() {
  await generateExcel();
  generatePDF();
}

generateFiles();
