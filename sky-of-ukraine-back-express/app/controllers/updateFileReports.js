const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.put("/main", (req, res) => {
  const { id, photo_1 } = req.body;
  if (!id || !photo_1) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  db.pool.execute(
    "UPDATE reports SET photo_1 = ? WHERE id = ?",
    [photo_1, id],
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
  const { id, photo_2 } = req.body;
  if (!id || !photo_2) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  db.pool.execute(
    "UPDATE reports SET photo_2 = ? WHERE id = ?",
    [photo_2, id],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred" });
      }
      res.json({ message: "Photo updated successfully" });
    }
  );
});

router.put("/location", (req, res) => {
  const { id, location } = req.body;
  if (!id || !location) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  db.pool.execute(
    "UPDATE reports SET location = ? WHERE id = ?",
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

router.put("/publication", (req, res) => {
  const { id, publicationDate } = req.body;
  if (!id || !publicationDate) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  db.pool.execute(
    "UPDATE reports SET publicationDate = ? WHERE id = ?",
    [publicationDate, id],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred" });
      }
      res.json({ message: "publicationDate updated successfully" });
    }
  );
});

router.put("/link", (req, res) => {
  const { id, link } = req.body;
  if (!id || !link) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  db.pool.execute(
    "UPDATE reports SET link = ? WHERE id = ?",
    [link, id],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred" });
      }
      res.json({ message: "link updated successfully" });
    }
  );
});

module.exports = router;
