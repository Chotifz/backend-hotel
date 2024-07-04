const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder tujuan penyimpanan sementara
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
