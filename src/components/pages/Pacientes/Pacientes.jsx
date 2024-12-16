import React, { useEffect, useState } from 'react'
import "./Pacientes.css"

const Pacientes = () => {

  document.title = "Clinica Vida Plena  |  Pacientes"

  const [loading, setLoading] = useState(true)
  const [pacientes, setPacientes] = useState([])

  useEffect(() => {

    fetch("https://desert-woozy-venus.glitch.me/api/users")
    .then(response => response.json())
    .then(data => {
      setPacientes(data)
    })
    .finally(() => {

      setLoading(false)
    })
  }, [])

  if(loading) {

    return <div className='loading'></div>
  }

  return (
    <main >
      <div className='container-doctor'>
        {
          pacientes.map(p => (
            <div className='paciente-item'>
              <h2>Paciente</h2>
              <h3><strong>Nombres: </strong>{p.Nombre}</h3>
              <h3><strong>Apellidos: </strong>{p.Apellido}</h3>
              <h3><strong>Cita para:</strong> {p.Cita}</h3>
              <h3><strong>Hora:</strong> {p.HoraCita}</h3>
              <h3><strong>Fecha:</strong> {p.FechaCita}</h3>
              <h3><strong>Citas: </strong> {p.Cita}</h3>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default Pacientes