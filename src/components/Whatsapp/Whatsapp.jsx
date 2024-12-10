import React from 'react'
import "./Whatsapp.css"
import { Link } from 'react-router-dom'

const Whatsapp = () => {
  return (
    <div className='whatsapp'>
      <a href="https://wa.me/953701023" target='_blanck'><i className='bi bi-whatsapp'></i></a>
      <p className='w-t'>Escribenos</p>
    </div>
  )
}

export default Whatsapp