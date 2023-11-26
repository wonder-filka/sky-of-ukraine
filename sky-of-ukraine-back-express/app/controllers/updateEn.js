const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.put("/", (req, res) => {
  const newData = req.body;

  newData.forEach(({ keyi18n, value }) => {
    console.log(`11111111111111`);
    db.pool.execute(
      "UPDATE en SET value = ? WHERE keyi18n = ?",
      [value, keyi18n],
      (error, results, fields) => {
        if (error) throw error;
      }
    );
  });

  res.json({ message: "Data updated successfully" });
});

module.exports = router;
