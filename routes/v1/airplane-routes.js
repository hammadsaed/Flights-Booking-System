const express = require("express");
const {
  airplaneController: {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane,
  },
} = require("../../controllers");
const {
  airplaneMiddleware: { validateCreateRequest },
} = require("../../middlewares");

const router = express.Router();

router.post("/", validateCreateRequest, createAirplane);
router.get("/", getAirplanes);
router.get("/:id", getAirplane);
router.delete("/:id", destroyAirplane);
router.put("/:id", validateCreateRequest, updateAirplane);

module.exports = router;
