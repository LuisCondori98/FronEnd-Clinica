import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {

  let f = new Date().getFullYear()

  return (
    <footer>
      <div class="footer-container">
        <div class="footer-contact">
          <h3>Contacto</h3>
          <p><strong>Dirección:</strong> Av. Aviacion 8647, Lima, Perú</p>
          <p><strong>Teléfono:</strong> (01) 875 6128</p>
          <p><strong>Email:</strong> admision@vidaplana.com</p>
        </div>

        <div class="footer-hours">
          <h3>Horarios de Atención</h3>
          <p><strong>Lunes a Viernes:</strong> 9:00 AM - 11:00 PM</p>
          <p><strong>Sábados:</strong> 9:00 AM - 9:00 PM</p>
        </div>

        <div class="footer-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/especialidades">Especialidades</Link></li>
            <li><Link to="/trabaja-con-nosotros">Trabaja con nosotros</Link></li>
            <li><Link to="/login">Mi Cuenta</Link></li>
          </ul>
        </div>
        <div class="footer-social">
          <h3>Síguenos</h3>
          <a href="https://facebook.com/" target="_blank" class="bi bi-facebook"></a>
          <a href="https://instagram.com/" target="_blank" class="bi bi-instagram"></a>
          <a href="https://www.whatsapp.com/?lang=es_LA" target="_blank" class="bi bi-whatsapp"></a>
          <a href="https://pe.linkedin.com/" target="_blank" class="bi bi-linkedin"></a>
          <a href="https://x.com/?lang=es" target="_blank" class="bi bi-twitter-x"></a>
        </div>
      </div>

      <div className='con-footer-logo'>
        <img className='footer-logo' src="/img/logo.jpg" alt=""/>
      </div>

      <div class="footer-legal">
        <p><strong>&copy; {f}</strong> Vida Plana. Todos los derechos reservados.</p>
        <ul>
          <li><a href="/politica-privacidad">Política de Privacidad</a></li>
          <li><a href="/terminos-condiciones">Términos y Condiciones</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer