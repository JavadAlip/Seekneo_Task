# 📁 Dummy Data Exporter (Node.js)

This project generates a **PDF** and an **Excel (.xlsx)** file containing dummy user data using **Node.js**.

---

## 🧰 Tech Stack

- **Node.js**
- **ExcelJS** – for generating `.xlsx` files
- **PDFKit** – for creating `.pdf` files
- **fs** – for file system operations

---

## 📁 Project Structure

SeekNeo-Task
├── data.js # Dummy user data (array of objects)
├── index.js # Main script to generate PDF and Excel files
├── dummy-data.pdf # Generated PDF file (after running the script)
├── dummy-data.xlsx # Generated Excel file (after running the script)
├── package.json # Project metadata and dependencies
└── README.md # Project documentation


---

## 📤 Output Format

### 🔹 Fields Included:
- 👤 Name
- 📧 Email
- 🎂 Age
- 📍 Place

---

### 📄 PDF Output

- Styled like a table using X/Y coordinates
- Column headers: **Name**, **Email**, **Age**, **Place**
- Each row represents one user

---

### 📊 Excel Output

- Clean column headers with user data
- One row per entry
- Created using **ExcelJS**

---

## ✅ Task Status

This task is **fully completed** as per the requirements.  
Both the PDF and Excel file are **auto-generated using dummy data**.

> 📌 **Note:** The generated files are included in the repository for review.

---

## 👨‍💻 Author

**Javad Ali**  
MERN Stack Developer  

---

## 📎 License

This project is created for **demonstration/interview task purposes only**.  
No commercial license is included.
