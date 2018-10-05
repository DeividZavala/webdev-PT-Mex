const express = require('express');
const router  = express.Router();
const Book = require('../models/Book');
const Author = require('../models/Author');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/authors', (req, res) => {
    Author.find()
        .then(authors => {
            res.render('authors', {header:"Lista de autores" ,authors});
        })
});

router.post('/authors', (req, res) => {
    Author.create(req.body)
        .then(() => {
            res.redirect('/authors')
        })
});

// Mostramos los libros
router.get('/books', (req, res) => {
  Book.find()
      .then(books => {
          console.log(books[0]);
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
    Author.find()
        .then(authors => {
            Book.findById(req.params.id)
                .populate("author")
                .then(book => {
                    res.render("bookDetail", {header: book.title, book, authors})
                })
        });

});

router.post('/books/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {$set: req.body})
        .then(book => {
            res.redirect(`/books/${book._id}`);
        })
});

module.exports = router;
