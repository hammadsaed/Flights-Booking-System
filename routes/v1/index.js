const express = require("express");

const {
  infoController: { getInfo },
} = require("../../controllers");

const router = express.Router();

router.use("/airplanes", require("./airplane-routes"));
router.use("/cities", require("./city-routes"));
router.get("/info", getInfo);

module.exports = router;
