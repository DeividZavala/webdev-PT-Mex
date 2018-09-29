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

app.get('/', (req, res) => {
        Movie.find().limit(20)
            .then(movies => {
                res.render('home', {movies});
            });
});


// Route params
app.get('/products/:prod', (req, res) => {
        Movie.find({_id: req.params.prod})
            .then(movies => {
                res.json({movies, params: req.params});
            });
});


// Query params
app.get('/products', (req, res) => {
        //  /producs?perro=panzer&age=20

        Movie.find({_id:req.query.id})
            .then(movies => {
                    res.json({movies})
            });

});

app.listen("3000", () => {
        console.log("Aplicación corriendo en el 3000")
});