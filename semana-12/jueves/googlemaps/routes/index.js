const express = require('express');
const router  = express.Router();
const Restaurant = require("../models/Restaurant");

/* GET home page */
router.get('/', (req, res, next) => {
  Restaurant.find()
      .then(restaurants =>{
          res.render('index',{restaurants});
      })
});

router.get("/maps", (req, res) => {
  res.render("maps");
});

router.get("/new", (req, res) => {
  res.render("new_res");
});

router.post("/new", (req, res) => {
  const {name, desc, lat, lng} = req.body;
  let coordinates = [];
    coordinates.push(lng);
    coordinates.push(lat);
  let restaurant = {
    name,
    desc,
    location:{
      coordinates
    }
  };

    Restaurant.create(restaurant)
        .then(()=>{
          res.redirect("/")
        })
});

router.get("/:id", (req, res) =>{
  Restaurant.findById(req.params.id)
      .then(restaurant => {
        res.render("detail",{restaurant});
      })
});

module.exports = router;
