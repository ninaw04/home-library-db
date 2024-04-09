import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8080/books")
        setBooks(res.data)
        // console.log(res)
      } catch (err){
        console.log(err)
      }
    }
    fetchAllBooks()
  }, [])

  return <div>
    <h1>Home Library Catalogue</h1>
    <div className="books">
      {books.map((book) => (
        <div className="book" key={book.BookID}>
          {book.Cover && <img src={book.Cover} alt="" />}
          <h2>{book.Title}</h2>
          <h2>{book.Author}</h2>
          <span>{book.Genre}</span> <br/>
          <span>{book.Lang}</span> <br/>
          <span>{book.Location}</span>
        </div>
      ))}
    </div>
    <button><Link to="/addBook">Add New Book</Link></button>
</div>
}

export default Books

// flowers/concrete,sharp edges
// dull, calm, peaceful/sharp and loud, noisy

// daily: explore 3 generated colors with any mediums