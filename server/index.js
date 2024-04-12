// imports aren't allowed since this isn't a module
const config = require('../.userConfig')
const express = require('express')
const app = express()
const mysql = require('mysql')
const PORT = 8080;
const cors = require('cors')

const db = mysql.createConnection( config.connect )

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json('Backend for home library catalogue')
})

// Create
app.post('/books', (req, res) => {
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

// Read 
app.get('/books', (req, res) => {
    const q = 'SELECT * FROM Books'

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// Get specific book
app.get('/books/:id', (req, res) => {
    const {id} = req.params
    const q = `SELECT * FROM Books where BookID = ${id}`

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// Specific Title for search purposes?
app.get('/books/:id/title', (req, res) => {
    const {id} = req.params
    const q = `SELECT Title FROM Books where BookID = ${id}`

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// Update
app.patch('/books/:id', (req, res) => {
    const {id} = req.params
})


// Delete
app.delete('/books/:id', (req, res) => {
    const bookID = req.params.id
    const q = 'DELETE FROM books WHERE BookID = ?'

    db.query(q, [bookID], (err, data) => {
        if(err) return res.json(err)
        return res.json("Book has been deleted")
    })
})

app.listen(PORT, () => {
    console.log(`connected on http://localhost:${PORT}`)
})