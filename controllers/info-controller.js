const { StatusCodes } = require("http-status-codes");

const getInfo = (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: "API is live",
    data: {},
    error: {},
  });
};

module.exports = {
  getInfo,
};
