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

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/books/"+id)
      window.location.reload()
    } catch(err) {
 
    }
  }

  return <div>
    <h1>Home Library Catalogue</h1>
    <button><Link to="/reading">Reading List</Link></button>
    <div className="books">
      {books.map((book) => (
        <div className="book" key={book.BookID}>
          {book.Cover && <img src={book.Cover} alt="" />}
          <h2>{book.Title}</h2>
          <h2>{book.Author}</h2>
          <span>{book.Genre}</span>
          <span>{book.Lang}</span>
          <span>{book.Location}</span>
          <button className='delete' onClick={()=>handleDelete(book.BookID)}>Delete</button>
          <button className='update'><Link to={`/updateBook/${book.BookID}`}>Update</Link></button>
        </div>
      ))}
    </div>
    <button><Link to="/addBook">Add New Book</Link></button>
</div>
}

export default Books