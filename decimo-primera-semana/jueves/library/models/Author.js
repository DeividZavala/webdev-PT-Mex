const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    lastname: String,
    nationality: String,
    birthday: Date,
    pictureUrl: String
});

module.exports = mongoose.model("Author", authorSchema);