// index.js (hoặc app.js)
const express = require('express');
const cors = require('cors');  // Import cors
const app = express();
const port = process.env.PORT || 3000; // Sử dụng port từ môi trường hoặc 3000

// Middleware
app.use(cors());  // Sử dụng cors
app.use(express.json()); // Để xử lý JSON trong body request

// Dữ liệu mẫu
const data = {
    title: 'fufu1',
    img: 'https://file.hstatic.net/200000455999/file/hoa-anh-dao__2__ff20ca77b429499f93341482097ccc18_grande.png', // Thay thế bằng URL ảnh thực tế
};

// API endpoint để lấy dữ liệu
app.get('/api/data', (req, res) => {
    res.json(data);
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});