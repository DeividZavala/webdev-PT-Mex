const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login",  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login"
}));

router.get("/register", (req, res) =>{
    res.render("register");
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

router.post("/logout", (req, res) => {
    req.logout();
    res.redirect("/auth/login");
});

module.exports = router;