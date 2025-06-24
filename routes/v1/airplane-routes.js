const express = require("express");
const {
  airplaneController: { createAirplane, getAirplanes },
} = require("../../controllers");
const {
  airplaneMiddleware: { validateCreateRequest },
} = require("../../middlewares");

const router = express.Router();

router.post("/", validateCreateRequest, createAirplane);

router.get("/", getAirplanes);

module.exports = router;
