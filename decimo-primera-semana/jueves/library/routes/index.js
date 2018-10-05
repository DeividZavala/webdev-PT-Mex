const express = require('express');
const router  = express.Router();
const Book = require('../models/Book');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Mostramos los libros
router.get('/books', (req, res) => {
  Book.find()
      .then(books => {
          res.render('books', {header: "Books", books})
      })
});

// Mostramos el formulario para crear un libro
router.get("/books/add", (req, res) => {
    res.render("create-book", {header: "Crear libro"})
});

router.post("/books/add", (req, res) => {
    Book.create(req.body)
        .then(() => {
            res.redirect("/books");
        })
});


// Mostrar el detalle del libro
router.get('/books/:id', (req, res) => {
  Book.findById(req.params.id)
      .then(book => {
        res.render("bookDetail", {header: book.title, book})
      })
});

router.post('/books/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {$set: req.body})
        .then(book => {
            res.redirect(`/books/${book._id}`);
        })
});

module.exports = router;
