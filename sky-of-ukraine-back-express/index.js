const express = require("express");
const mailer = require("./sendEmail");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const logger = require("./logger");

const port = process.env.PORT || 80;

const corsOptions = {
  origin: [
    "https://admin.skyua.org",
    "https://skyua.org",
    "http://localhost:3002",
    "http://localhost:3000",
  ],
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  next();
});

app.use(function (req, res, next) {
  if (
    req.headers["x-forwarded-proto"] !== "https" &&
    process.env.NODE_ENV === "production"
  ) {
    res.redirect("https://" + req.hostname + req.url);
  } else {
    next();
  }
});

const casesRouter = require("./app/controllers/casesController");
const deleteRouter = require("./app/controllers/deleteCase");
const deleteReport = require("./app/controllers/deleteReport");
const saveFileRouter = require("./app/controllers/savefile");
const updateEnRouter = require("./app/controllers/updateEn");
const updateUkrRouter = require("./app/controllers/updateUkr");
const deleteEnRouter = require("./app/controllers/deleteEn");
const deleteUkrRouter = require("./app/controllers/deleteUkr");
const addCaseRouter = require("./app/controllers/addCase");
const addReportsRouter = require("./app/controllers/addReport");
const users = require("./app/controllers/users");
const enRouter = require("./app/controllers/enTranslate");
const ukrRouter = require("./app/controllers/ukrTranslate");
const updateProjectPhoto = require("./app/controllers/updateFileProject");
const updateReportPhoto = require("./app/controllers/updateFileReports");
const reports = require("./app/controllers/reports");

app.use(bodyParser.json());
app.use(express.static("images"));
let dotenv = require('dotenv').config()
app.post("/my-endpoint", (req, res) => {
  const { name, lastname, phone, email, company, message } = req.body;
  const messagetoEmail = {
    from: "Website Sky UA <manager@skyua.org>",
    to: "lolly.oops.shop@gmail.com",
    subject: "Mail from web site",
    text: `
         Mail from web site
       Name: ${name}
       Lastname: ${lastname}
       Phone: ${phone}
       Email: ${email}
       Company: ${company}
       Message: ${message}
      `,
  };
  mailer(messagetoEmail);
  res.send(
    `Name: ${name}, Lastname: ${lastname}, Phone: ${phone}, Email: ${email}, Company: ${company}, Message: ${message}, `
  );
});

app.use("/projects", casesRouter);
app.use("/reports", reports);
app.use("/save-files", saveFileRouter);
app.use("/update-en", updateEnRouter);
app.use("/update-ukr", updateUkrRouter);
app.use("/update-project", updateProjectPhoto);
app.use("/update-report", updateReportPhoto);
app.use("/delete-en", deleteEnRouter);
app.use("/delete-ukr", deleteUkrRouter);
app.use("/add-project", addCaseRouter);
app.use("/add-report", addReportsRouter);
app.use("/users", users);
app.use("/en", enRouter);
app.use("/ukr", ukrRouter);

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  logger.info(`Test backend listening on port ${port}`);
});
