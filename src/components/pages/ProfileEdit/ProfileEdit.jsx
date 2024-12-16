import React, { useEffect, useState } from 'react'
import "./ProfileEdit.css"
import { useParams } from 'react-router-dom'

const ProfileEdit = () => {

  document.title = "Clinica Vida Plena  |  Editar Perfil"

  const {idUser} = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {

    fetch(`https://desert-woozy-venus.glitch.me/api/users/${idUser}`)
    .then(response => response.json())
    .then(data => setUser(data))

  }, [])

  return (
    <main>
      <div>
        {
          <form className='container-form'>
            <input type="text" placeholder={user.Nombre} />
            <input type="text" placeholder={user.Apellido} />
            <input type="text" placeholder={user.Correo} />
            <input type="text" placeholder={user.Telefono} />
            <input type="text" placeholder={user.Direccion} />
            <input type="submit" value="Cambiar" className='btn btn-success' />
          </form>
        }
      </div>
    </main>
  )
}

export default ProfileEdit