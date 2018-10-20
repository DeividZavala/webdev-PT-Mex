const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bidSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    winner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    end_date: Date,
    start_date: Date,
    leader: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    photos: [String]
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Bid", bidSchema);