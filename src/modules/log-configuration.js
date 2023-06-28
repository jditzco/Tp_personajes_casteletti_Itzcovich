import winston from "winston";
const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: 'debug'
        }),
        new winston.transports.File({
            level: 'info',
            filename: 'logs/example.log'
        })
    ]
};
export default logConfiguration;