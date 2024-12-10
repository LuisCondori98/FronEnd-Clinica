import React, { useState } from 'react'
import "./Header.css"
import NavBar from '../NavBar/NavBar'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const user = JSON.parse(localStorage.getItem('user'))

  const navigate = useNavigate()

  const cerrarSesion = () => {

    if(user) {

      localStorage.removeItem('user')

      window.location.reload()

      navigate("/inicio")
    } else {

      navigate("/inicio")
    }
  }

  return (
    <header>
      <Link to="/inicio"><img src="/img/logo.png" alt="logo" className='logo'/></Link>
      <NavBar />
      <div className='login-register'>
        {
          user ?
          <div>
            <Link to={"/profile"} type='submit' className='btn btn-success'>{user.Nombre}</Link>
            <button type='submit' className='btn btn-danger' onClick={cerrarSesion}>Cerrar sesion</button>
          </div>
          :
          <div><Link className='btn btn-primary' to={"/login"}>Ingresar</Link>
        <Link className='btn btn-danger' to={"/registrar"}>Registrar</Link></div>
        }
      </div>
      <h5 className='direc direc-tel'><i class="bi bi-telephone-fill"></i>(01) 875 6128</h5>
      <h5 className='direc direc-email'><i class="bi bi-envelope-fill"></i>admision@vidaplana.com</h5>
    </header>
  )
}

export default Header