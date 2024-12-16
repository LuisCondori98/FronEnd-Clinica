import React from 'react'
import { Link } from 'react-router-dom'
import "./Profile.css"

const Profile = () => {

  document.title = "Clinica Vida Plena  |  Perfil"

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <main>
      <section className='container-perfil'>
      {
        user ? 
        <div className='container-perfil-data'>
          <Link to={`/profile-edit/${user._id}`} className='btn btn-danger'>Editar Perfil <i class="bi bi-pencil-fill"></i></Link>
          <h1 style={{textAlign: "center"}}>- {(user.Role).toUpperCase()} -</h1>
          <img className='img-profile' src="/img/profile.png" alt="" />
          <h3><strong>Nombres:</strong> {user.Nombre}</h3>
          <h3><strong>Apellidos:</strong> {user.Apellido}</h3>
          <h3><strong>Correo:</strong> {user.Correo}</h3>
          {/* {
            user.Role = "Doctor" ?
            <h3><strong>Especialidad: </strong>{user.Especialidad}</h3>
            :
            <></>
          } */}
          <h3><strong>Telefono:</strong> {user.Telefono}</h3>
          <h3><strong>Direccion:</strong> {user.Direccion}</h3>
          <h3><strong>Edad:</strong> {user.Edad}</h3>
          <h3><strong>Telefono:</strong> {user.Telefono}</h3>
          <h3><strong>Dni:</strong> {user.Dni}</h3>
          <div>
          {
            user.Role == "Admin" ?
            <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "15px"}}>
              <Link to={"/pacientes"} className='btn btn-primary'>ver todos los Pacientes</Link>
              <Link to={"/doctores"} className='btn btn-primary'>ver todos los Doctores</Link>
              <button className='btn btn-primary'>ver todos las Citas</button>
              <button className='btn btn-primary'>ver a todo el Personal</button>
            </div>
            :
            <div></div>
          }
          </div>
          <button type='submit' className="btn btn-success">Ver mis citas</button>
        </div>
        :
        <></>
      }
      </section>
    </main>
  )
}

export default Profile