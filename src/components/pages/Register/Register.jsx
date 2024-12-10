import React, { useState } from 'react'
import "./Register.css"

const Register = () => {

  document.title = "Clinica Vida Plena  |  Registro"

  // const [nombre, setNombre] = useState("")
  // const [apellido, setApellido] = useState("")
  // const [correo, setCorreo] = useState("")
  // const [telefono, setTelefono] = useState("")
  // const [dni, setDni] = useState("")
  // const [contraseña, setContraseña] = useState("")

  // console.log(nombre)

  const userResponse = () => {

    Toastify({
      text: "Usuario creado",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();

    // fetch("http://localhost:8080/api/users/login", "POST")
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  }

  return (
    <main>
      <div class="register-container" data-aos="flip-left">
        <h2>Regístrate</h2>
        <form action='http://localhost:8080/api/users/register' method="POST" class="register-form">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="Nombre" placeholder="Ingrese su nombre" required />
          </div>
          <div class="form-group">
            <label for="apellido">Apellido</label>
            <input type="text" id="apellido" name="Apellido" placeholder="Ingrese su apellido" required />
          </div>
          <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="Correo" placeholder="Ingrese su correo electrónico" required />
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono</label>
            <input type="number" id="telefono" name="Telefono" placeholder="Ingrese su número de teléfono" required />
          </div>
          <div class="form-group">
            <label for="direccion">Direccion</label>
            <input type="text" id="direccion" name="Direccion" placeholder="Ingrese su Direccion" required />
          </div>
          <div class="form-group">
            <label for="dni">Dni</label>
            <input type="number" id="dni" name="Dni" placeholder="Ingrese su número de Dni" required />
          </div>
          <div class="form-group">
            <label for="edad">Edad</label>
            <input type="number" id="edad" name="Edad" placeholder="Ingrese su número Edad" required />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="Contrasenia" placeholder="Cree una contraseña" required />
          </div>
          <input type="submit" value={"Crear Cuenta"} onClick={userResponse}/>
        </form>
      </div>
    </main>
  )
}

export default Register