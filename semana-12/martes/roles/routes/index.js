const express = require('express');
const router  = express.Router();

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect("/auth/login");
}

function checkRole(role){
  return function (req, res, next){
    if(req.isAuthenticated() && req.user.role === role) return next();
    res.redirect("/private");
  }
}

const checkAdmin = checkRole("ADMIN");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/private", isLoggedIn, (req, res) => {
  res.render("private", {user: req.user});
});

router.get("/admin", checkAdmin, (req, res) => {
    res.render("private", {user: req.user});
});

module.exports = router;
