var express = require("express");
var router = express.Router();
var cors = require('cors');

router.use(cors());

let db = require('../database').databaseConnection

router.get('/', (req, res) => {
  res.json('Backend for home library catalogue')
})

// Create book
router.post('/books', (req, res) => {
  const q = 'INSERT INTO Books (`title`, `author`, `genre`, `lang`, `location`, `cover`) VALUES (?)'
  const values = [
      req.body.title,
      req.body.author,
      req.body.genre,
      req.body.lang,
      req.body.location,
      req.body.cover
  ]

  db.query(q, [values], (err, data) => {
      if(err) return res.json(err)
      return res.json("Book has been created")
  })
})

// Read (get) book
router.get('/books', (req, res) => {
  const q = 'SELECT * FROM Books'

  db.query(q, (err, data) => {
      if(err) return res.json(err)
      return res.json(data)
  })
})

// Get specific book
router.get('/books/:id', (req, res) => {
  const {id} = req.params
  const q = `SELECT * FROM Books where BookID = '${id}'`

  db.query(q, (err, data) => {
      if(err) return res.json(err)
      return res.json(data)
  })
})

// Specific Title for search purposes?
router.get('/books/:id/title', (req, res) => {
  const {id} = req.params
  const q = `SELECT Title FROM Books where BookID = ${id}`

  db.query(q, (err, data) => {
      if(err) return res.json(err)
      return res.json(data)
  })
})

// Update Book
router.put('/books/:id', (req, res) => {
  const bookID = req.params.id
  const q = "UPDATE books SET `Title` = ?, `Author` = ?, `Genre` = ?, `Lang` = ?, `Location` = ?, `Cover` = ? WHERE BookID = ? "
  const values = [
      req.body.title,
      req.body.author,
      req.body.genre,
      req.body.lang,
      req.body.location,
      req.body.cover
  ]

  db.query(q, [...values, bookID], (err, data) => { 
      if(err) return res.json(err)
      return res.json("Book has been updated")
  })
})

// Delete Book 
router.delete('/books/:id', (req, res) => {
  const bookID = req.params.id
  const q = 'DELETE FROM books WHERE BookID = ?'

  db.query(q, [bookID], (err, data) => {
      if(err) return res.json(err)
      return res.json("Book has been deleted")
  })
})

module.exports = router;
