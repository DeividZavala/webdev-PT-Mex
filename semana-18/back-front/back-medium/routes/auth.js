const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const upload = require("../helpers/multer");

router.post("/login", async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(404).json({msg: "Email no es valido"});

    let validPassword = bcrypt.compareSync(req.body.password, user.password);

    if(!validPassword) return res.status(500).json({msg:"La contra es incorrecta"});

    const token = jwt.sign(
        {id: user._id},
        process.env.SECRET,
        {
        expiresIn: 8600
    });

    delete user._doc.password;

    console.log(user);

    res.status(200).json({user, token});

});

router.post("/register", (req, res) => {

    if(req.body.password !== req.body.confirmPassword) return res.status(500).json({msg: "Las cotraseñas no coinciden"});

    const salt = bcrypt.genSaltSync(256);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })
        .then(() => {
            res.status(201).json({msg: "Usuario creado con éxito"})
        })
        .catch(err => {
            res.status(500).json({err, msg: "No se pudo crear"})
        })

});

router.patch("/:id",upload.single("picture"), (req, res) => {
    let user = {};

    Object.keys(req.body).forEach(key => {
        user[key] = req.body[key];
    });
    if(req.file) user.profile_picture = req.file.url;


    User.findByIdAndUpdate(req.params.id, {$set: user}, {new:true})
        .then(user => {
            res.status(200).json({user});
        })
});

module.exports = router;