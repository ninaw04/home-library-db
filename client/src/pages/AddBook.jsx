import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  const [book, setBook] = useState({
    title:"", 
    author:"",
    genre:"",
    language:"select",
    location:"select",
    cover:"",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8080/books", book )
      navigate("/")
    } catch(err) {
      console.log(err)
    }
  }
 
  console.log(book)
  return (
    <div className='form'>
      <h1>Add New Book</h1>
      <input type="text" placeholder='Title' onChange={handleChange} name="title"/>
      <input type="text" placeholder='Author' onChange={handleChange} name="author"/>
      <select onChange={handleChange} name='genre'>
        <option value="select">Genre</option>
        <option value="contemporary">Contemporary</option>
        <option value="fiction">Fiction</option>
        <option value="nonfiction">Non-Fiction</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="fantasy">Fantasy</option>
        <option value="mystery">Mystery</option>
        <option value="classics">Classics</option>
        <option value="history">History</option>
        <option value="other">Other</option>
      </select>
      <select onChange={handleChange} name='language'>
        <option value="select">Language</option>
        <option value="chinese">Chinese</option>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
      </select>
      <select onChange={handleChange} name='location'>
        <option value="select">Location</option>
        <option value="case1">BookCase1</option>
        <option value="case2">BookCase2</option>
        <option value="case3">BookCase3</option>
        <option value="case4">BookCase4</option>
      </select>
      <input type="text" placeholder='Cover' onChange={handleChange} name="cover"/>
      <button onClick={handleClick}>Add Book</button>
    </div>
  )
}

export default AddBook
