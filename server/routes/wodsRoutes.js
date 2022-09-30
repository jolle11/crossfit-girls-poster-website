const express = require("express");
const router = express.Router();
const { getWods, getWodsByUnitType, getWod } = require(
	"../controllers/wodsController",
);

router.route("/").get(getWods);
router.route("/:units").get(getWodsByUnitType);
router.route("/:units/:name").get(getWod);

module.exports = router;
