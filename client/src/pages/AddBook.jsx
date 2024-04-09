import React, { useState } from 'react'

const AddBook = () => {
  const [book, setBook] = useState({
    Title:"",
    Author:"",
    Genre:"",
    Language:"select",
    Location:"",
    Cover:"",
  })
  return (
    <div className='form'>
      <h1>Add New Book</h1>
      <input type="text" placeholder='Title' />
      <input type="text" placeholder='Author' />
      <input type="text" placeholder='Genre' />
      <select name='language'>
        <option value="select">Language</option>
        <option value="chinese">Chinese</option>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
      </select>
      <select name='Location'>
        <option value="select">Location</option>
        <option value="chinese">BookCase1</option>
        <option value="english">BookCase2</option>
        <option value="spanish">BookCase3</option>
        <option value="french">BookCase4</option>
      </select>
    </div>
  )
}

export default AddBook
