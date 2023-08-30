import axios from 'axios'
import React from 'react'

const NewRequest = axios.create({
    baseURL:"http://127.0.0.1:8080/api/",
    withCredentials:true
  
})

export default NewRequest