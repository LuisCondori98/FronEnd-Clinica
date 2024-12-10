import React, { useEffect, useState } from 'react'
import "./ProfileEdit.css"
import { useParams } from 'react-router-dom'

const ProfileEdit = () => {

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
          <form>
            <input type="text" placeholder={user.Nombre} />
            <input type="text" placeholder={user.Apellido} />
            <input type="text" placeholder={user.Correo} />
            <input type="text" placeholder={user.Nombre} />
          </form>
        }
      </div>
    </main>
  )
}

export default ProfileEdit