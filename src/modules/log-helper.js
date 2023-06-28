import logConfiguration from "./log-configuration.js";
import winston from "winston";


const logger = winston.createLogger(logConfiguration);

module.exports = logger;
