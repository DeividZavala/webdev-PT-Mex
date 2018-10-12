const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/maps", (req, res) => {
  res.render("maps");
});

router.get("/new", (req, res) => {
  res.render("new_res");
});

router.post("/new", (req, res) => {
  console.log(req.body);
});

module.exports = router;
