const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    year: String,
    director: String,
    duration: String,
    genre: [
        {
            type: String
        }
    ],
    rate: String
});

module.exports = mongoose.model("Movie", movieSchema);