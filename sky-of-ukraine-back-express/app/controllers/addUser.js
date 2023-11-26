const express = require("express");
const router = express.Router();
const pool = require("../config/db").pool;

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  const values = [name, email, password];

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving user to database");
      return;
    }
    console.log("User added to database with ID:", result.insertId);
    res.status(201).send("User added to database");
  });
});

module.exports = router;
