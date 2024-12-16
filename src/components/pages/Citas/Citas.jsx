import React, { useState } from 'react'
import "./Citas.css"
import { useNavigate } from 'react-router-dom'

const Citas = () => {

  document.title = "Clinica Vida Plena  |  Citas"

  const user = JSON.parse(localStorage.getItem('user'))

  const [nombres, setNombres] = useState("")
  const [apellidos, setApellidos] = useState("")
  const [correo, setCorreo] = useState("")
  const [telefono, setTelefono] = useState(null)
  const [direccion, setDireccion] = useState("")
  const [edad, setEdad] = useState(null)
  const [dni, setDni] = useState(null)
  const [cita, setCita] = useState("")
  const [horaCita, setHoraCita] = useState("null")
  const [fechaCita, setFechaCita] = useState("")

  const navigate = useNavigate()

  const handleOnSubmit = async (e) => {

    e.preventDefault()

    const { value: contrasenia } = await Swal.fire({
      title: "Crea tu contraseña",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: "10",
        autocapitalize: "off",
        autocorrect: "off"
      }
    });
    if (contrasenia || user) {

      let dataCita = {
        Nombre: user ? user.Nombre : nombres,
        Apellido: user ? user.Apellido : apellidos,
        Correo: user ? user.Correo : correo,
        Telefono: user ? user.Telefono : telefono,
        Edad: user ? user.Edad : edad,
        Dni: user ? user.Dni : dni,
        Direccion: direccion ? user.Direccion : direccion,
        Contrasenia: contrasenia || user?.Contrasenia,
        Cita: cita,
        HoraCita: horaCita,
        FechaCita: fechaCita,
      }

      Swal.fire(`Cuenta creada ya no necesita registrarse`);

      fetch("https://desert-woozy-venus.glitch.me/api/citas", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataCita)
      })
    }

    Toastify({
      text: "CITA CREADA",
      className: "info",
      style: {
        background: "black",
        color: "white"
      }
    }).showToast();

    setTimeout(() => {

      navigate("/inicio")
    }, 2000)
  }

  const f = new Date()
  const Hour = f.getHours()
  const Minutes = f.getMinutes()
  const Seconds = f.getSeconds()

  return (
    <main>
      <section className="appointments-section">
      <div className="appointments-header">
        <h2>Solicita tu cita</h2>
        <p>Te ayudamos a programar tu consulta de manera fácil y rápida.</p>
      </div>

      <div className="appointments-form" data-aos="flip-down">
        <h3>Formulario de solicitud de cita</h3>
        {
          user ?
          <form onSubmit={handleOnSubmit}>
            <h2>Hola {user.Nombre} {user.Apellido}</h2>
          <div style={{display: 'grid', gridTemplateColumns: "repeat(2, 1fr)", gridGap: "25px"}}>
            <select name="Cita" value={cita} onChange={e => setCita(e.target.value)} required >
              <option value="">-- Seleccione especialidad --</option>
              <option value="Consulta General">Consulta General</option>
              <option value="Chequeo Preventivo">Chequeo Preventivo</option>
              <option value="Especialidad Cardiología">Especialidad Cardiología</option>
              <option value="Especialidad Dermatologia">Especialidad Dermatologia</option>
              <option value="Especialidad Odontología">Especialidad Odontología</option>
              <option value="Especialidad Ginecologia">Especialidad Ginecologia</option>
              <option value="Especialidad Pediatria">Especialidad Pediatria</option>
            </select>
            <input type="date" name="date" onChange={(e) => setFechaCita(e.target.value)} required />
            <input type="time" name="time" onChange={(e) => setHoraCita(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="">Hora: {Hour}:{Minutes}:{Seconds} - Fecha {f.getDate()}/{f.getMonth() + 1}/{f.getFullYear()}</label>
          </div>
          <button type="submit">Solicitar Cita</button>
        </form>
          :
          <form onSubmit={handleOnSubmit}>
          <div style={{display: 'grid', gridTemplateColumns: "repeat(2, 1fr)", gridGap: "25px"}}>
            <input type="text" name="Nombre" placeholder="Nmbres" onChange={(e) => setNombres(e.target.value)} required />
            <input type="text" name="Apellido" placeholder="Apellidos" onChange={(e) => setApellidos(e.target.value)} required />
            <input type="text" name='Correo' placeholder='Correo' onChange={(e) => setCorreo(e.target.value)} required />
            <input type="number" name='Telefono' placeholder='Telefono' onChange={(e) => setTelefono(e.target.value)} required />
            <input type="text" name='Direccion' placeholder='Direccion' onChange={(e) => setDireccion(e.target.value)} required />
            <input type="number" name='Edad' placeholder='Edad' onChange={(e) => setEdad(e.target.value)} required />
            <input type="number" name="Dni" placeholder="Dni" onChange={(e) => setDni(e.target.value)} required />
            <select name="Cita" value={cita} onChange={e => setCita(e.target.value)} required >
              <option value="">-- Seleccione especialidad --</option>
              <option value="Consulta General">Consulta General</option>
              <option value="Chequeo Preventivo">Chequeo Preventivo</option>
              <option value="Especialidad Cardiología">Especialidad Cardiología</option>
              <option value="Especialidad Dermatologia">Especialidad Dermatologia</option>
              <option value="Especialidad Odontología">Especialidad Odontología</option>
              <option value="Especialidad Ginecologia">Especialidad Ginecologia</option>
              <option value="Especialidad Pediatria">Especialidad Pediatria</option>
            </select>
            <input type="date" name="date" onChange={(e) => setFechaCita(e.target.value)} required />
            <input type="time" name="time" onChange={(e) => setHoraCita(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="">Hora: {Hour}:{Minutes}:{Seconds} - Fecha {f.getDate()}/{f.getMonth() + 1}/{f.getFullYear()}</label>
          </div>
          <button type="submit">Solicitar Cita</button>
        </form>
        }        
      </div>
    </section>
    </main>
  )
}

export default Citas