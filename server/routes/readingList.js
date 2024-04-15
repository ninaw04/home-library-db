var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());

let db = require('../database').databaseConnection

/* GET all users' reading lists */
router.get('/', function(req, res, next) {
  const q = 'SELECT r.Reader, b.Title, b.Author, r.ReadStatus, r.Review FROM ReadingList r LEFT JOIN Books b ON r.BookID = b.BookID'
  
  db.query(q, (err, data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
});

/* GET reading list of specific user */
router.get('/:reader', (req, res) => {
  const reader = req.params.reader
  const q = 'SELECT * FROM ReadingList where Reader = \'' + reader + '\''

  db.query(q, (err, data) => {
      if(err) return res.json(err)
      return res.json(data)
  })
})

// POST a row in reading list
router.post('/', (req, res) => {
  const q = 'INSERT INTO ReadingList (`reader`, `bookID`, `readStatus`, `review`) VALUES (?)'
  const values = [
    req.body.reader,
    req.body.bookID,
    req.body.readStatus,
    req.body.review
  ]

  db.query(q, [values], (err, data) => {
    if(err) return res.json(err)
    return res.json("Column has been inserted")
  })
})

// PUT or update row
router.put('/:user/:id', (req, res) => {
  const user = req.params.user
  const bookID = req.params.id
  const q = 'UPDATE ReadingList SET `ReadStatus` = ?, `Review` = ? WHERE `Reader` = ? and BookID = ?'
  const values = [
    req.body.readStatus,
    req.body.review
  ]

  db.query(q, [...values, user, bookID], (err, data) => { 
    if(err) return res.json(err)
    return res.json("Reading list has been updated")
  })
})

router.delete('/:user/:id', (req, res) => {
  const user = req.params.user
  const bookID = req.params.id
  const q = 'DELETE FROM ReadingList WHERE `Reader` = ? and BookID = ?'

  db.query(q, [user, bookID], (err, data) => {
      if(err) return res.json(err)
      return res.json("Reading list row has been deleted")
  })
})

module.exports = router;
