const express = require("express");
const {
  airplaneController: { createAirplane },
} = require("../../controllers");
const {
  airplaneMiddleware: { validateCreateRequest },
} = require("../../middlewares");

const router = express.Router();

router.post("/", validateCreateRequest, createAirplane);

module.exports = router;
