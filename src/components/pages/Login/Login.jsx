import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  document.title = "Clinica Vida Plena  |  Login"

  const [user, setUser] = useState()
  const [dni, setDni] = useState(null)
  const [contrasenia, setContrasenia] = useState("")

  const navigate = useNavigate()

  const handleOnSubmit = (e) => {

    e.preventDefault()

    const credentials = {
      Dni: dni,
      Contrasenia: contrasenia
    }

    fetch("https://desert-woozy-venus.glitch.me/api/users/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(data => setUser(data[0]))
      .catch(err => {

        console.log(err.messagge)
      })
  }

  if(user) {

    localStorage.setItem("user", JSON.stringify(user))

    navigate("/inicio")
  }

  const handleOnClick = async () => {

    const { value: codigo } = await Swal.fire({
      input: "email",
      inputLabel: "Recuperar contraseña",
      inputPlaceholder: "Ingrese correo"
    });
    if (codigo) {

      Swal.fire(`Codigo ingresado: ${codigo}`);
    }

    console.log(codigo)
  }

  return (
    <main>
      <div class="login-container" data-aos="flip-right">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleOnSubmit} class="login-form">
        <div class="form-group">
          <label for="dni">DNI</label>
          <input type="number" id="dni" name="Dni" onChange={e => setDni(e.target.value)} placeholder="Ingrese su DNI" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="Contrasenia" onChange={e => setContrasenia(e.target.value)} placeholder="Ingrese su contraseña" required/>
        </div>
        <button type="submit">Ingresar</button>
        <a onClick={handleOnClick} href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
      </form>
    </div>
    </main>
  )
}

export default Login