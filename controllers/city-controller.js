const { StatusCodes } = require("http-status-codes");
const { cityService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

const createCity = async (req, res) => {
  try {
    const city = await cityService.createCity({
      name: req.body.name,
    });
    successResponse.data = city;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const getCities = async (req, res) => {
  try {
    const cities = await cityService.getCities();
    successResponse.data = cities;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const getCity = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    successResponse.data = city;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const destroyCity = async (req, res) => {
  try {
    const city = await cityService.destroyCity(req.params.id);
    successResponse.data = city;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

const updateCity = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, {
      name: req.body.name,
    });
    successResponse.data = city;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
};

module.exports = {
  createCity,
  getCities,
  getCity,
  destroyCity,
  updateCity,
};
