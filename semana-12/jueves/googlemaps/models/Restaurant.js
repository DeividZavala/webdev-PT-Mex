const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: String,
    desc: String,
    location: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: [Number]
    }
});

restaurantSchema.index(location,"2dsphere");

module.exports = mongoose.model("Restaurant", restaurantSchema);