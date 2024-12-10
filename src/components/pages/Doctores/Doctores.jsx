import React, { useEffect, useState } from 'react'
import "./Doctores.css"

const Doctores = () => {

  const [loading, setLoading] = useState(true)
  const [doctores, setDoctores] = useState([])

  useEffect(() => {

    fetch("https://candied-eggplant-bicycle.glitch.me/api/doctores")
    .then(response => response.json())
    .then(data => {
      setDoctores(data)
    })
    .finally(() => {

      setLoading(false)
    })
  }, [])

  if(loading) {

    return <div className='loading'></div>
  }

  return (
    <main>
      <div className='container-doctor'>
        {
          doctores.map(d => (
            <div className='doctor-item'>
              <h2>Doctor</h2>
              <h3><strong>Nombres: </strong>{d.Nombre}</h3>
              <h3><strong>Apellidos: </strong>{d.Apellido}</h3>
              <h3><strong>Correo:</strong> {d.Correo}</h3>
              <h3><strong>Telefono:</strong> {d.Telefono}</h3>
              <h3><strong>Especialidad:</strong> {d.Especialidad}</h3>
              <h3><strong>Consultorio: </strong> {d.Consultorio}</h3>
            </div>
          ))
        }
      </div>
      <div>
        <button className='btn btn-warning'>Crear Doctor</button>
      </div>
    </main>
  )
}

export default Doctores