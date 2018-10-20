const express = require("express");
const router = express.Router();
const Bid = require("../models/Bid");
const upload = require("../helpers/multer");

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect("/auth/login");
}

function checkIfOwner(req, res, next){
    Bid.findById(req.params.id)
        .then(bid => {
            if(bid.owner.toString() === req.user._id.toString()){
                req.bid = bid;
                return next();
            }
            res.redirect("/bid");
        })
        .catch(() => {
            res.redirect("/bid");
        });
}

router.get("/", isLoggedIn, (req, res) => {
    Bid.find()
        .populate("owner", "username")
        .then(bids => {
            console.log(bids);
            res.render("bid-list", {bids})
        })
});

router.get("/new", isLoggedIn,(req, res) => {
    res.render("bid-form");
});

router.get("/:id/edit",isLoggedIn, checkIfOwner, (req, res) => {
    const {bid} = req;
    res.render("bid-form",{bid});
});

// editando el post
router.post("/:id/edit", isLoggedIn, checkIfOwner, upload.array("photos"),(req, res) => {
    req.body.photos = req.files.map(file => {
        return file.url;
    });
    Bid.findByIdAndUpdate(req.params.id, {$set: req.body})
        .then(()=>{
            res.redirect("/bid")
        })
});

router.post("/new", isLoggedIn, upload.array("photos"),(req, res) => {
    req.body.photos = req.files.map(file => {
        return file.url;
    });
    req.body.owner = req.user._id;
    Bid.create(req.body)
        .then(() => {
            res.redirect("/bid")
        })
        .catch(err => {
            res.render("bid-form", {err, msg:"No se pudo crear tu subasta"})
        })
});

module.exports = router;