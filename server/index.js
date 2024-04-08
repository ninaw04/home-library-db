// imports aren't allowed since this isn't a module
const config = require('../.userConfig')
const express = require('express')
const app = express()
const mysql = require('mysql')
const PORT = 8080;

const db = mysql.createConnection( config.connect )

app.use(express.json())

app.get('/', (req, res) => {
    res.json('Backend for home library catalogue')
})

// Create
app.post('/books', (req, res) => {
    const q = 'INSERT INTO Books (`title`, `author`, `genre`, `lang`, `location`) VALUES (?)'
    const values = [
        req.body.title,
        req.body.author,
        req.body.genre,
        req.body.lang,
        req.body.location
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
app.get('/books/{id}', (req, res) => {
    const {id} = req.params
    const q = 'SELECT * FROM Books where id = {`id`}'

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/books/{id}/title', (req, res) => {
    const q = 'SELECT Title FROM Books where id = {`id`}'

    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// Update



// Delete

app.listen(PORT, () => {
    console.log(`connected on http://localhost:${PORT}`)
})