const express = require('express');
const router = express.Router();
const multer = require('multer');
const farmeraddproductController = require('../controllers/farmeraddproductController');
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '../uploads');

// Create uploads directory if it doesn't exist
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir); // Directory where images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Saving file with timestamp and original name
  }
});

const upload = multer({ storage });

router.post('/add', upload.single('productImage'), farmeraddproductController.addProduct);

module.exports = router;