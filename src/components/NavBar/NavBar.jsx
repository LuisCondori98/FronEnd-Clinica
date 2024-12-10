import React from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom'

const NavBar = () => {

let naveg = ["Inicio", "Especialidades", "Contacto", "Citas", "Nosotros"]

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
              {
                naveg.map(i => <NavLink to={`/${i.toLowerCase()}`} className={({isActive}) => isActive ? "link-active" : "link"}>{i}</NavLink>)
              }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar