const express = require("express");
const router = express.Router();
const db = require("../config/db"); // Импортируйте модуль db вместо использования pool напрямую

router.get("/", (req, res) => {
  db.executeQuery("SELECT * FROM reports", (error, results, fields) => {
    if (error) {
      res.status(500).send("Error fetching data from reports");
    } else {
      res.json(results);
    }
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM reports WHERE id = ?`;

  db.pool.execute(sql, [id], (error, results, fields) => {
    if (error) throw error;
    res.json(results[0]);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM reports WHERE id = ?`;

  db.pool.execute(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting case from database");
      return;
    }
    console.log("Report deleted from database");
    res.status(200).send("Report deleted from database");
  });
});




module.exports = router;
