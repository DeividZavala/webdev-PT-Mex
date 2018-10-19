const express = require("express");
const router = express.Router();
const upload = require("../helpers/multer");
const Post = require("../models/Post");

router.get("/", (req, res) => {
    Post.find()
        .sort({"created_at": -1})
        .then(posts => {
            res.render("feed", {posts});
        });
});

router.get("/add", (req, res) => {
    res.render("form");
});

router.post("/", upload.array("photos"), (req, res) => {

    req.body.photos = req.files.map(photo => {
        return photo.url;
    });

    Post.create(req.body)
        .then(() => {
            res.redirect("/post/");
        });
});

module.exports = router;