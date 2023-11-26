const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const { username, password } = req.body.user;
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.pool.execute(query, [username, password], (error, results, fields) => {
    if (error) {
      res.status(500).send("Error querying users");
    } else {
      if (results.length > 0) {
        const token = jwt.sign(
          { id: results[0].id, username: results[0].username },
          "my-secret-key",
          { expiresIn: "1h" }
        );
        // res.status(200).send("User authenticated successfully");
        res.status(200).json({
          token,
          id: results[0].id,
          username: results[0].username,
          message: "User authenticated successfully",
        });
      } else {
        res.status(401).send("Invalid login or password");
      }
    }
  });
});
module.exports = router;
