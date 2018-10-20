const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: "Debes mandar un nombre de usuario",
        unique: true
    },
    email: {
        type: String,
        unique: "El email debe de unico",
        required: true
    },
    profile_pic: String
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("User", userSchema);