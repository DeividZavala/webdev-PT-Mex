const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
    Post.find()
        .then(posts => {
            res.status(200).json({posts});
        })
        .catch(err => {
            res.status(500).json({err, msg:"Algo no funcó"})
        })
});

router.post("/", (req, res) => {
    Post.create(req.body)
        .then(post => {
            res.status(201).json({post});
        })
        .catch(err => {
            res.status(500).json({err, msg:"Ne se creo mijo"})
        })
});

router.patch("/:id", (req, res) => {
    Post.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new:true})
        .then(post => {
            res.status(200).json({post});
        })
        .catch(err => {
            res.status(500).json({err, msg:"Ne se actualizo mijo"})
        })
});


router.delete("/:id", (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(post => {
            res.status(200).json({post});
        })
        .catch(err => {
            res.status(500).json({err, msg: "No se pudo borrar tu jalada"})
        })
});

module.exports = router;