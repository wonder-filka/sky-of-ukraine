const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  console.log("mySQL projects");
  db.executeQuery("SELECT * FROM projects", (error, results, fields) => {
    if (error) {
      res.status(500).send("Error fetching data from projects");
    } else {
      res.json(results);
    }
  });
});

router.get("/:id", (req, res) => {
  console.log("mySQL projects id");
  const id = req.params.id;
  const sql = `SELECT * FROM projects WHERE id = ?`;

  db.pool.execute(sql, [id], (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error fetching data from projects");
    } else {
      res.json(results[0]);
    }
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM projects WHERE id = ?`;
  const values = [id];

  db.pool.execute(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting case from database");
      return;
    }
    console.log("Case deleted from database");
    res.status(200).send("Case deleted from database");
  });
});

module.exports = router;
