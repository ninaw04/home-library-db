import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Reading = () => {

  useEffect(() => {
    const fetchAllReading = async () => {
      try {
        const res = await axios.get("http://localhost:8080/reading")
        console.log(res)
      } catch (err){
        console.log(err)
      }
    }
    fetchAllReading()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/reading/"+id)
      window.location.reload()
    } catch(err) {
 
    }
  }

  return <div>
    <h1>Reading List</h1>
</div>
}

export default Reading