var mongoose = require('mongoose');

var statSchema = mongoose.Schema({
	pokemonId: {
		type: Number,
		min: 1,
		max: 649
	},
	correct: {
		type: Number,
		min: 0,
		max: 1
	},
	difficulty: {
		type: String,
		min: 0,
		max: 2
	},
	generation: {
		type: Array
	},
	timeTaken: {
		type: Number,
		min: 0,
		max: 600000
	},
	userId: {
		type: String
	}
}, {
	timestamps: true
})

//the schema is useless so far
// we need to create a model using it

var Stats = mongoose.model('Stat', statSchema);

module.exports = Stats;