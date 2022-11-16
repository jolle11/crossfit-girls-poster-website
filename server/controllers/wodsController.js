const asyncHandler = require("express-async-handler");

const { capitalizeFirstLetter } = require("../middleware/capitalizer");

const Wod = require("../models/wodModel");

// @desc    Get wods
// @route   GET /api/wods
// @access  Public
const getWods = asyncHandler(async (req, res) => {
	const wods = await Wod.find();
	wods.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
	const imperial = [];
	const metric = [];

	if (!wods) {
		res.status(400);
		throw new Error("Looks like the database is empty");
	}

	wods.map((wod) => {
		switch (wod.units) {
			case "imperial": {
				imperial.push(wod);
				break;
			}
			case "metric": {
				metric.push(wod);
				break;
			}
			case "none": {
				imperial.push(wod);
				metric.push(wod);
				break;
			}
		}
	});

	res.status(200).json({ imperial: imperial, metric: metric });
});

// @desc    Get wods by unit type
// @route   GET /api/wods/:units
// @access  Public
const getWodsByUnitType = asyncHandler(async (req, res) => {
	if (req.params.units !== "imperial" && req.params.units !== "metric") {
		res.status(400);
		throw new Error("Use imperial or metric");
	}

	const wods = await Wod.find();
	wods.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

	const wodsByUnitType = wods.map((wod) => {
		if (wod.units === req.params.units.toLowerCase() || wod.units === "none") {
			return wod;
		}
	});

	if (!wods) {
		res.status(400);
		throw new Error("Looks like the database is empty");
	}

	res.status(200).json(wodsByUnitType);
});

// @desc    Get wod by name
// @route   GET /api/wods/:units/:name
// @access  Public
const getWod = asyncHandler(async (req, res) => {
	const wod = await Wod.find({
		name: capitalizeFirstLetter(req.params.name),
		units: req.params.units.toLowerCase(),
	});

	if (!wod.length) {
		res.status(400);
		throw new Error("Wod not found");
	}

	res.status(200).json(wod);
});

module.exports = { getWods, getWodsByUnitType, getWod };
