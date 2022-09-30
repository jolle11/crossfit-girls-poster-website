const mongoose = require("mongoose");

const wodSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	lines: {
		type: Array,
		required: true,
	},
	units: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Wod", wodSchema);
