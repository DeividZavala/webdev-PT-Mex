const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/private", (req, res) => {
  res.render("private", {user: req.user});
});

module.exports = router;
