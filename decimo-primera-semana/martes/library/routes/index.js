const express = require('express');
const router  = express.Router();
const Book = require('../models/Book');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/books', (req, res) => {
  Book.find()
      .then(books => {
          res.render('books', {header: "Books", books})
      })
});

router.get('/books/:id', (req, res) => {
  Book.findById(req.params.id)
      .then(book => {
        res.render("bookDetail", {header: book.title, book})
      })
});

module.exports = router;
