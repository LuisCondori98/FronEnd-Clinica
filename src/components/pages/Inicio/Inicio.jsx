import React from 'react'
import "./Inicio.css"
import { Link } from 'react-router-dom'

const Inicio = () => {

  document.title = "Clinica Vida Plena  |  Inicio"

  return (
    <main>
      <section className='banner' data-aos="fade-up">
        <h3 className='banner-text'>"Tu bienestar, nuestra prioridad."</h3>
        <p className='banner-parrafo'>"En Vida Plana nos especializamos en cuidar de tu salud con atención personalizada y tratamientos innovadores."</p>
      </section>
      <div className='descripcion' data-aos="fade-up">
        <h3 className='descripcion-item'>"En Vida Plana ofrecemos una atención integral de salud, con un enfoque humano y especializado en medicina general, atención de enfermedades crónicas, fisioterapia, etc. Nuestro objetivo es mejorar tu calidad de vida a través de tratamientos innovadores y un equipo profesional comprometido."</h3>
      </div>
      <section className='servicios' data-aos="fade-up">
        <Link to={"/atencion-medica-integral"} className='servicios-item' data-aos="flip-left">
          <h4 className='servicios-link'>Atención Médica Integral</h4>
        </Link>
        <Link to={"/consultas-especializadas"} className='servicios-item' data-aos="flip-right">
          <h4 className='servicios-link'>Consultas Especializadas</h4>
        </Link>
        <Link to={"/fisioterapia-y-rehabilitación"} className='servicios-item' data-aos="flip-left">
          <h4 className='servicios-link'>Fisioterapia y Rehabilitación</h4>
        </Link>
        <Link to={"/examenes-de-diagnostico"} className='servicios-item' data-aos="flip-right">
          <h4 className='servicios-link'>Exámenes de Diagnóstico</h4>
        </Link>
      </section>
      <h2 className='testimonios-title'>Testimonios</h2>
      <section className='testimonios'>
        <div className='testimonios-container'>
          {/* primer testimonio */}
          <div className='testimonios-item' data-aos="flip-up">
            <img src="/img/juan-perez.webp" alt="" style={{height: "150px", width: "150px", margin: "auto"}}/>
            <h5>"Un cambio positivo en mi vida"</h5>
            <p className='testimonios-item-p'>
            "Llevo varios meses recibiendo atención médica integral en Vida Plana, y puedo decir que ha sido una de las mejores decisiones de mi vida."
            </p>
            <label><span style={{color: "orange"}}>★★★</span>★★</label>
            <label><strong>— Juan Pérez</strong>, paciente de fisioterapia y salud integral</label>
          </div>
          {/* segundo testimonio */}
          <div className='testimonios-item' data-aos="flip-up">
            <img src="/img/laura.png" alt="" style={{height: "125px", width: "125px", margin: "auto"}}/>
            <h5>"Un trato cercano y profesional"</h5>
            <p className='testimonios-item-p'>
            "Desde mi primera consulta, me sentí acogida y escuchada. El personal es altamente profesional, sino que también tienen un trato cercano que me hizo sentir muy cómoda."
            </p>
            <label><span style={{color: "orange"}}>★★★★</span>★</label>
            <label><strong>— Laura García</strong>, paciente de salud mental y medicina general</label>
          </div>
        </div>        
      </section>
      <div className='info-clinica'>
          <div className='info-clinica-item'>
            <h2>+1 329 pacientes</h2>
          </div>
          <div className='info-clinica-item'>
            <h2>7 especialidades</h2>
          </div>
          <div className='info-clinica-item'>
            <h2>28 Medicos</h2>
          </div>
        </div>
    </main>
  )
}

export default Inicio