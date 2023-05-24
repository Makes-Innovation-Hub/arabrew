import { pinoHttp } from "pino-http";
import pino from "pino";

const logger = pino({
  level: "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

export const httpLogger = pinoHttp({ logger });
