import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'

const ShowReader = () => {

  const location = useLocation()
  const reader = location.pathname.split("/")[2]

  useEffect(() => {
      const fetchAllReading = async () => {
          try {
              const res = await axios.get("http://localhost:8080/reading/" + reader)
              console.log(res)
          } catch (err) {
              console.log(err)
          }
      }
      fetchAllReading()
  }, [])

  const handleDelete = async (id) => {
      try {
          await axios.delete("http://localhost:8080/reading/" + id)
          window.location.reload()
      } catch (err) {

      }
  }

  return <div>
      <h1>{reader}'s' List</h1>
  </div>
}

export default ShowReader