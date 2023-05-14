import React, { useState } from "react";

const ErrorBoundary = ({ fallback, children }) => {
  const [isError, setIsError] = useState(false);

  const componentDidCatch = (error, info) => {
    console.error(error, info);
    setIsError(true);
  };

  if (isError) {
    return fallback;
  }
  return children;
};

export default ErrorBoundary;