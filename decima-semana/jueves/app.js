const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');

// configuramos la ruta a las views
app.set("views", __dirname + "/views");
// configuramos el motor de templates
app.set("view engine", "hbs");
// configuramos la ruta a los estaticos
app.use(express.static(path.join(__dirname, "public")));

// registramos partials
hbs.registerPartials(__dirname + "/views/partials");

app.get('/', (req, res) => {
    let  data = {
        name: "David",
        foods: ["Tacos", "Tortas", "Tamales", "Tlacoyos", "Tlacuaches"],
        user: {name: "Paco", username: "Perro", age:34}
    };
    res.render("index", data);
});

app.get('/players', (req, res) => {
    res.render("player");
});

app.get('/contacto', (req, res) => {
   res.render('contacto');
});

app.listen("3000", () => {
    console.log("Servidor listo papi en el puerto 3000")
});