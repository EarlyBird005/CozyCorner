import logger from "../utils/logger.js";
import morgan from "morgan";

const morganFormat = ":method :url :status :response-time ms";

export const loggerMidddleware = morgan(morganFormat, {
    stream: {
        write: (message) => {
            const logObject = {
                method: message.split(" ")[0],
                url: message.split(" ")[1],
                status: message.split(" ")[2],
                responseTime: message.split(" ")[3],
            };
            logger.info(JSON.stringify(logObject));
        },
    },
});