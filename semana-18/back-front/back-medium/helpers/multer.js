const multer = require("multer");
const Storage = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = Storage({
    cloudinary,
    folder: "medium",
    allowedFormats: ["jpg", "jpeg", "gif", "png"]
});

module.exports = multer({storage});