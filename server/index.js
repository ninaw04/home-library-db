const express = require('express')
const app = express()
const PORT = 8080;
const cors = require('cors')

var booksRouter = require("./routes/books");
var readingRouter = require("./routes/readingList");

app.use(express.json())
app.use("/", booksRouter);
app.use("/reading", readingRouter);
app.use(cors())

app.listen(PORT, () => {
    console.log(`connected on http://localhost:${PORT}`)
})