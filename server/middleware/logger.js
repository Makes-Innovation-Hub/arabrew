import pino from "pino";

const loggerMiddleware = (req, res, next) => {
  const log = pino();

  // Determine the file context based on the filename or any other criteria
  const filePath = req.originalUrl;
  const isRoutesFile = filePath.includes("routes");
  const isControllersFile = filePath.includes("controllers");

  // Log information based on the file context
  if (isRoutesFile) {
    console.log("here");
    const { url, method } = req;
    log.info(
      `Incoming request - URL: ${url}, Method: ${method}, filePath:${filePath}`
    );
  } else if (isControllersFile) {
    const { params } = req;
    log.info(
      `Controller execution - Params: ${JSON.stringify(
        params
      )},filePath:${filePath}`
    );
  } else {
    log.info(`Some other context,filePath:${filePath}`);
  }

  next();
};

export default loggerMiddleware;
