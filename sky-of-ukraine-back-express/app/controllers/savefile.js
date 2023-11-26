const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// middleware для обработки данных формы
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

// middleware для загрузки файлов
const storage = multer.diskStorage({
  destination: "images/",
  filename: function (req, file, cb) {
    cb(null, file.fieldname);
  },
});
const upload = multer({ storage: storage });
router.use(upload.any());

// маршрут для обработки POST-запросов
router.post("/", (req, res, next) => {
  console.log(req.body); // содержимое полей формы
  console.log(req.files); // содержимое загруженных файлов
});

// экспортируем маршрутизатор для использования в приложении
module.exports = router;
