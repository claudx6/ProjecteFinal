import React from "react";
import Navbar from '../components/Navbar.jsx';
import Footer from "../components/Footer.jsx";
import CarouselAboutUs from "../components/CarouselAboutUs.jsx";
import TeamCard from "../components/TeamCard.jsx";
import AboutUsPhotos from "../components/AboutUsPhotos.jsx";



function Aboutus() {
  return (
    <div>
      <Navbar />
      <CarouselAboutUs />
      <TeamCard />
      <AboutUsPhotos />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Aboutus;