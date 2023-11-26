const express = require("express");
const router = express.Router();
const db = require("../config/db"); // Импортируйте модуль db вместо использования pool напрямую

router.get("/", (req, res) => {
  console.log("mySQL ukr");

  db.executeQuery("SELECT * FROM ukr", (error, results, fields) => {
    if (error) {
      res.status(500).send("Error fetching data from content_ukr");
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
