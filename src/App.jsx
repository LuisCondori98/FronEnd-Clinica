import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Inicio from "./components/pages/Inicio/Inicio"
import Nosotros from "./components/pages/Nosotros/Nosotros"
import Especialidades from "./components/pages/Especialidades/Especialidades"
import Footer from "./components/pages/Footer/Footer"
import Fisioterapia from "./components/pages/Fisioterapia/Fisioterapia"
import ConsultasEspe from "./components/pages/ConsultasEspe/ConsultasEspe"
import Login from "./components/pages/Login/Login"
import Whatsapp from "./components/Whatsapp/Whatsapp"
import Register from "./components/pages/Register/Register"
import Contacto from "./components/pages/Contacto/Contacto"
import Citas from "./components/pages/Citas/Citas"
import Profile from "./components/Profile/Profile"
import Pacientes from "./components/pages/Pacientes.jsx/Pacientes"
import Doctores from "./components/pages/Doctores/Doctores"
import ProfileEdit from "./components/pages/ProfileEdit/ProfileEdit"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Whatsapp />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/fisioterapia-y-rehabilitación" element={<Fisioterapia />} />
        <Route path="/consultas-especializadas" element={<ConsultasEspe />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-edit/:idUser" element={<ProfileEdit />} />
        <Route path="/doctores" element={<Doctores />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
