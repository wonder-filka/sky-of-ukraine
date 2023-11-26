const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {
  const { projectData, dataEn, dataUkr } = req.body;

  dataEn.forEach((item) => {
    const { keyi18n, value } = item;
    const query = `INSERT INTO en (keyi18n, value) VALUES ('${keyi18n}', '${value}') ON DUPLICATE KEY UPDATE value = '${value}'`;

    db.executeQuery(query, (error, results, fields) => {
      if (error) {
        console.error(
          `Error inserting or updating data for keyi18n: ${keyi18n}`
        );
      } else {
        console.log(`Data inserted or updated for keyi18n: ${keyi18n}`);
      }
    });
  });

  dataUkr.forEach((item) => {
    const { keyi18n, value } = item;
    const query = `INSERT INTO ukr (keyi18n, value) VALUES ('${keyi18n}', '${value}') ON DUPLICATE KEY UPDATE value = '${value}'`;

    db.executeQuery(query, (error, results, fields) => {
      if (error) {
        console.error(
          `Error inserting or updating data for keyi18n: ${keyi18n}`
        );
      } else {
        console.log(`Data inserted or updated for keyi18n: ${keyi18n}`);
      }
    });
  });

  const { title, data, region, description, photo_1, photo_2, link, location, publicationDate
  } =
    projectData;
  const query = `INSERT INTO reports (
    title,  
    data,  
    region,
    description,
    photo_1,
    photo_2,
    link,
    location,
    publicationDate
) VALUES (
      '${title}', 
      '${data}', 
      '${region}',
       '${description}',
       '${photo_1}', 
       '${photo_2}', 
       '${link}',
       '${location}',
       '${publicationDate}')`;

  db.executeQuery(query, (error, results, fields) => {
    if (error) {
      res.status(500).send("Error inserting data into reports");
    } else {
      res.send("Data inserted into reports");
    }
  });
});

module.exports = router;
