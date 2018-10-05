const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    },
    description: String,
    rating: Number
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Book", bookSchema);