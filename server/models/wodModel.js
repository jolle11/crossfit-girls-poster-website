const mongoose = require('mongoose');

const wodSchema = mongoose.Schema(
	{
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
	},
	{
		versionKey: false, // You should be aware of the outcome after set to false
	},
);

module.exports = mongoose.model('Wod', wodSchema);
