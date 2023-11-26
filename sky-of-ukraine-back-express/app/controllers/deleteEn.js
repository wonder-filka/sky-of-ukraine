const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.delete("/", async (req, res) => {
  const { keyi18n } = req.body;

  try {
    for (const value of keyi18n) {
      const sql = "DELETE FROM en WHERE keyi18n = ?";
      await db.pool.execute(sql, [value]);
    }

    console.log("en keys deleted from database");
    res.status(200).send("en keys deleted from database");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting en keys from database");
  }
});

module.exports = router;
