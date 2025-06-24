const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repository");
const { AppError } = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const explanation = error.errors.map((err) => err.message);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new airplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "Cannot fetch airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        `Cannot find airplane with id ${id}`,
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      `Something went wrong while fetching the airplane`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplane(id) {
  try {
    const airplane = await airplaneRepository.destroy(id);
    return airplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        `The airplane you request to delete with id: ${id} is not present`,
        StatusCodes.NOT_FOUND
      );
    }

    throw new AppError(
      `Something went wrong while destroying the airplane`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
};
