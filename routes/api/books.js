const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing..'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: 'No books found' }))
});

// @route GET api/books/:id
// @description Get a single books by id
// @access Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: 'No book found' }))
});

// @route GET api/books
// @description Add/save book
// @access Public
router.get('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({ msg: 'Book added' }))
        .catch(err => res.status(400).json({ error: 'Unable to add book' }))
})

// @route GET api/books/:id
// @description Update book by id
// @access Public
router.get('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated successfullt' }))
        .catch(err => res.status(400).json({ error: 'Unable to update database' }))
})

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ msg: 'Book deleted' }))
        .catch(err => res.status(404).json({ error: 'No such book' }))
})

module.exports = router;