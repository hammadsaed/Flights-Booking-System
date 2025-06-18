const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const { AppError } = require("../utils/errors/app-error");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.modelNumber) {
    errorResponse.message =
      "Something went wrong while validating the request!";
    errorResponse.error = new AppError(
      ["Model number is required to create an airplane!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  next();
};

module.exports = {
  validateCreateRequest,
};
