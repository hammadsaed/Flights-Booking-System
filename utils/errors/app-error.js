class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.explanation = message;
    Error.captureStackTrace(this);
  }
}

module.exports = {
  AppError,
};
