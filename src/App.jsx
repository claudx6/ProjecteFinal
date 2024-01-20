import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';
// import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Carousel from './pages/Carousel';
// import AboutUs from "./pages/AboutUs.jsx";
// import Birds from "./pages/Birds.jsx";
// import Cats from "./pages/Cats.jsx";
// import ContactUs from "./pages/ContactUs.jsx";
// import Dogs from "./pages/Dogs.jsx";
// import Fish from "./pages/Fish.jsx";
// import HairSalon from "./pages/HairSalon.jsx";
// import HomeService from "./pages/HomeService.jsx";
// import OurShop from "./pages/OurShop.jsx";
// import Reptiles from "./pages/Reptiles.jsx";
// import Rodents from "./pages/Rodents.jsx";
// import Services from "./pages/Services.jsx";
// import Shop from "./pages/Shop.jsx";
// import whoAreWe from "./pages/WhoAreWe.jsx";
// import SignUp from "./pages/SignUp.jsx";

function App() {

  return (
    <>
      <Navbar/>
      <Home /> 
      <br />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />

        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App;
