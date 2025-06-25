const express = require("express");
const {
  cityController: { createCity, getCities, getCity, destroyCity, updateCity },
} = require("../../controllers");
const {
  cityMiddleware: { validateCreateRequest },
} = require("../../middlewares");

const router = express.Router();

router.post("/", validateCreateRequest, createCity);
router.get("/", getCities);
router.get("/:id", getCity);
router.delete("/:id", destroyCity);
router.put("/:id", validateCreateRequest, updateCity);

module.exports = router;
