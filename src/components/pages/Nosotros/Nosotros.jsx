import React, { useEffect, useState } from 'react'
import "./Nosotros.css"

const Nosotros = () => {

  document.title = "Clinica Vida Plena  |  Nosotros"

  const [doctors, setDoctors] = useState([])

  useEffect(() => {

    fetch("https://desert-woozy-venus.glitch.me/api/doctores")
      .then(response => response.json())
      .then(data => setDoctors(data))

  },[])

  return (
    <main>
      <section id="nosotros" class="nosotros">
        <div class="container">
          <h2 class="titulo">Nosotros</h2>
          <p class="subtitulo">Cuidando de tu bienestar integral, con amor y profesionalismo.</p>

          <div class="descripcion-nosotros">
            <p>
              En <strong>Vida Plena</strong>, nos dedicamos a ofrecer servicios de salud integrales, enfocados en mejorar la calidad de vida de nuestros pacientes. 
              Con más de <strong>10 años</strong> de experiencia, combinamos tecnología avanzada con un enfoque humano para atender tus necesidades de manera personalizada.
            </p>
          </div>

          <div class="mision-vision-valores">
            <div class="card">
              <h3>Misión</h3>
              <p>
                Mejorar la salud y el bienestar de cada persona a través de tratamientos efectivos y un trato cálido y profesional.
              </p>
            </div>
            <div class="card">
              <h3>Visión</h3>
              <p>
                Ser reconocidos como la clínica líder en atención integral, ofreciendo servicios de excelencia y logrando un impacto positivo en la comunidad.
              </p>
            </div>
            <div class="card">
              <h3>Valores</h3>
              <ul>
                <li>Empatía</li>
                <li>Compromiso</li>
                <li>Innovación</li>
                <li>Calidad</li>
                <li>Respeto</li>
              </ul>
            </div>
          </div>

          <div class="equipo">
            <h3>Nuestro Equipo</h3>
            <p>Conoce a nuestros especialistas:</p>
            <div class="miembros">
              {
                doctors.map(doc => (
                  <div class="miembro">
                    <img src={doc.img} alt={doc.Nombre} />
                    <h4>{doc.Nombre}</h4>
                    <p>{doc.Especialidad}</p>
                  </div>
                ))
              }
              {/* <div class="miembro">
                <img src="doctor1.jpg" alt="Dra. María López" />
                <h4>Dra. María López</h4>
                <p>Especialista en fisioterapia y rehabilitación</p>
              </div>
              <div class="miembro">
                <img src="doctor2.jpg" alt="Dr. Juan Pérez" />
                <h4>Dr. Juan Pérez</h4>
                <p>Cardiólogo</p>
              </div>
              <div class="miembro">
                <img src="doctor3.jpg" alt="Lic. Ana Gómez" />
                <h4>Lic. Ana Gómez</h4>
                <p>Nutricionista</p>
              </div> */}
            </div>
          </div>

          <div class="infraestructura">
            <h3>Infraestructura y Servicios</h3>
            <p>
              Nuestras instalaciones modernas y acogedoras cuentan con consultorios equipados, áreas de rehabilitación y un ambiente diseñado para tu tranquilidad.
            </p>
            <img src="instalaciones.jpg" alt="Instalaciones Vida Plena" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Nosotros