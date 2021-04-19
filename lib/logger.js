var winston = require("winston");
//var ENV = process.env.NODE_ENV;

function getLogger(module) {

  let path = module.filename.split("/").slice(-2).join("/");

  return new winston.createLogger({
    transports: [
      new winston.transports.Console({
        colorize: true,
        level: "debug",
        label: path
      })
    ]
  });
}

module.exports = getLogger;