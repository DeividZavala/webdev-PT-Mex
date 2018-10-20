const express = require("express");
const router = express.Router();
const Bid = require("../models/Bid");

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect("/auth/login");
}

router.get("/", isLoggedIn, (req, res) => {
    Bid.find()
        .then(bids => {
            res.render("bid-list", {bids})
        })
});

router.get("/new", isLoggedIn,(req, res) => {
    res.render("bid-form");
});

router.post("/new", isLoggedIn, (req, res) => {
    req.body.owner = req.user._id;
    Bid.create(req.body)
        .then(() => {
            res.redirect("/bid")
        })
        .catch(err => {
            console.log(err);
            res.render("bid-form", {err, msg:"No se pudo crear tu subasta"})
        })
});

module.exports = router;