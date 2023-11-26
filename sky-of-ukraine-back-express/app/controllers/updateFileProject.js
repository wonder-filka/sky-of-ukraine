const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.put("/main", (req, res) => {
  const { id, photo_main } = req.body;
  if (!id || !photo_main) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  db.pool.execute(
    "UPDATE projects SET photo_main = ? WHERE id = ?",
    [photo_main, id],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred" });
      }
      res.json({ message: "Photo updated successfully" });
    }
  );
});

router.put("/title", (req, res) => {
  const { id, photo_title } = req.body;
  if (!id || !photo_title) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  db.pool.execute(
    "UPDATE projects SET photo_title = ? WHERE id = ?",
    [photo_title, id],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred" });
      }
      res.json({ message: "Photo updated successfully" });
    }
  );
});

router.put("/region", (req, res) => {
  const { id, location } = req.body;
  if (!id || !location) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  console.log("regiiiionnnnnnnn");
  db.pool.execute(
    "UPDATE projects SET region = ? WHERE id = ?",
    [location, id],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred" });
      }
      res.json({ message: "Region updated successfully" });
    }
  );
});

module.exports = router;
