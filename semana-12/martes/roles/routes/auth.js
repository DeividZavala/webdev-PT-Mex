const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/register', (req, res) => {
    res.render("login")
});
router.post('/register', (req, res) => {
    if(req.body.password !== req.body.confirmpassword) return res.render("login", {err: "Las contraseñas no son las mismas"});
    const {username, email, password} = req.body;
    User.register({username, email}, password)
        .then(user =>{
            res.json(user);
        })
});


router.get('/login', (req, res) => {});
router.post('/login', (req, res) => {});

router.post('/logout', (req, res) =>{});


module.exports = router;