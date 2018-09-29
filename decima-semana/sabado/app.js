const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Modelos
const Movie = require('./models/Movie');

mongoose.connect('mongodb://localhost:27017/video', {useNewUrlParser: true})
    .then(() => {
        console.log("Conectado a la DB");
});

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get('/products/:prod', (req, res) => {
        Movie.find({_id: req.params.prod})
            .then(movies => {
                res.json({movies, params: req.params});
            });
});

app.listen("3000", () => {
        console.log("Aplicación corriendo en el 3000")
});