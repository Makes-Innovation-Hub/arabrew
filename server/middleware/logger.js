import pino from "pino";
// import PinoPretty from "pino-pretty";

// Create a Pino logger instance
const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:yyyy-mm-dd HH:MM:ss.l o",
    },
  },
});

// Middleware function for logging incoming requests
const requestLogger = (req, res, next) => {
  logger.info(
    {
      url: req.originalUrl,
      method: req.method,
      headers: req.headers,
      payload: req.body,
    },
    "Incoming request"
  );
  next();
};

// Middleware function for logging successful responses
const responseLogger = (req, res, next) => {
  const originalSend = res.send;
  res.send = function (body) {
    logger.info(
      {
        statusCode: res.statusCode,
        headers: res.getHeaders(),
        payload: body,
      },
      "Outgoing response"
    );
    originalSend.call(this, body);
  };
  next();
};

// Middleware function for logging controller events
const controllerLogger = (serviceName, params, message) => {
  logger.info({ serviceName, params }, message);
};

// Middleware function for logging errors
const errorLogger = (err, req, res, next) => {
  logger.error(err);
  next(err);
};

// Middleware function for logging database queries
const databaseLogger = (query, params) => {
  logger.info({ query, params }, "Database query");
};

// Middleware function for logging important events or service calls
const eventLogger = (eventName, metadata) => {
  logger.info(metadata, eventName);
};

// Middleware function for logging the duration of operations
const timingLogger = (operationName, startTime) => {
  const endTime = Date.now();
  const durationInMilliseconds = endTime - startTime;
  const durationInSeconds = durationInMilliseconds / 1000; // Convert to seconds
  logger.info(
    { duration: `${durationInSeconds}s` },
    `Duration of ${operationName}`
  );
};

// Middleware function for logging successful operations
const successLogger = (operationName, metadata) => {
  logger.info(metadata, `${operationName} succeeded`);
};

export {
  logger,
  requestLogger,
  responseLogger,
  errorLogger,
  databaseLogger,
  eventLogger,
  timingLogger,
  successLogger,
  controllerLogger,
};
