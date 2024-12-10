import React from 'react'
import "./Especialidades.css"

const Especialidades = () => {

  document.title = "Clinica Vida Plena  |  Especialidades"

  const especialidades = [
    {
      Especialidad: "Cardiología",
      Info: "Diagnóstico y tratamiento de enfermedades del corazón y el sistema circulatorio.",
      img: "cardiologia.jpg"
    },
    {
      Especialidad: "Dermatología",
      Info: "Cuida la salud de tu piel con los mejores especialistas.",
      img: "dermatologia.jpg"
    },
    {
      Especialidad: "Ginecología",
      Info: "Atención integral para la salud femenina.",
      img: "ginecologia.webp"
    },
    {
      Especialidad: "Pediatría",
      Info: "Especialistas en la salud y bienestar de los más pequeños.",
      img: "pediatra.webp"
    },
    {
      Especialidad: "Gastroenterología",
      Info: "Especialistas en aparato digestivo, especialmente del estómago y de los intestinos, y de sus enfermedades.",
      img: "gastroenterologia.webp"
    }
  ]

  return (
    <main>
      <section class="specialties-section">
        <div class="specialties-header">
          <h2>Nuestras Especialidades</h2>
          <p>Conoce las áreas médicas en las que te podemos ayudar</p>
        </div>

        <div class="specialties-grid">
          {
            especialidades.map(es => (
              <div class="specialty-card" data-aos="flip-left">
                <img src={`/img/${es.img}`} alt={es.Especialidad} />
                <h3>{es.Especialidad}</h3>
                <p>{es.Info}</p>
                <a href="#" class="btn">Más información</a>
              </div>
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default Especialidades