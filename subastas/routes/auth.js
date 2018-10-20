const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");

router.get("/login", (req, res) => {

});

router.post("/login",  passport.authenticate("local"),(req, res) => {

});

router.get("/register", (req, res) =>{

});

router.post("/register", (req, res) => {
    if(req.body.password !== req.body["password-confirm"]) return res.render("register", {msg: "Tus contras no machean"});
    const {username, email, password} = req.body;
    User.register({username, email}, password)
        .then(() => {
            res.redirect("/auth/login")
        })
        .catch(err => {
            res.status(500).render("register",{err, msg:"No pudimos registrarte"})
        })
});

module.exports = router;