import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Carousel from './pages/Carousel';
import AboutUs from "./pages/AboutUs.jsx";
import Birds from "./pages/Birds.jsx";
import Cats from "./pages/Cats.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Dogs from "./pages/Dogs.jsx";
import Fish from "./pages/Fish.jsx";
import HairSalon from "./pages/HairSalon.jsx";
import HomeService from "./pages/HomeService.jsx";
import Reptiles from "./pages/Reptiles.jsx";
import Rodents from "./pages/Rodents.jsx";
import Services from "./pages/Services.jsx";
import Shop from "./pages/Shop.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {

  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Shop />} />
        <Route path="/tienda/perros" element={<Dogs />} />
        <Route path="/tienda/gatos" element={<Cats />} />
        <Route path="/tienda/peces" element={<Fish />} />
        <Route path="/tienda/aves" element={<Birds />} />
        <Route path="/tienda/roedores" element={<Rodents />} />
        <Route path="/tienda/reptiles" element={<Reptiles />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/servicios/servicio-a-domicilio" element={<HomeService />} />
        <Route path="/servicios/perruqueria" element={<HairSalon />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App;
