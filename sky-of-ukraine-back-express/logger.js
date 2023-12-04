const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(
      (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
    )
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
        )
      ),
    }),
    new transports.File({ filename: "database.log" }),
  ],
});

module.exports = logger;
