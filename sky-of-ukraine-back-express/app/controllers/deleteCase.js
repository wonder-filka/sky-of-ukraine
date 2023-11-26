const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM projects WHERE id = ?`;
  const values = [id];

  db.pool.execute(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting project from database");
      return;
    }
    console.log("Project deleted from database");
    res.status(200).send("Project deleted from database");
  });
});

module.exports = router;
