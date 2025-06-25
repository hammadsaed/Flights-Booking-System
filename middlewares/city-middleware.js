const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const { AppError } = require("../utils/errors/app-error");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.name) {
    errorResponse.message =
      "Something went wrong while validating the request!";
    errorResponse.error = new AppError(
      ["Name is required to create a city!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  next();
};

module.exports = {
  validateCreateRequest,
};
