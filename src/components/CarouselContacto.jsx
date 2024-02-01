// import React, { useState } from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import "/src/assets/css/CarouselContacto.css";
// import image12 from '../assets/images/tienda/image12.jpg';
// import img2 from '../assets/images/carousel/img2.jpg';
// import img3 from '../assets/images/carousel/img3.jpg';

// function ControlledCarousel() {

//   return (
//     <div>
//       <Carousel>
//     <Carousel.Item style={{height:'70vh', width: '100%', position:'relative'}}>
//       <img style={{position:'absolute', bottom:'-43rem'}}
//         className="d-block w-100"
//         src={image12}
//         alt="First slide"
//       />
//       <Carousel.Caption>
//         <h3>Contacta con Petit Amazones,</h3>
//         <p>te asesoraremos</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item style={{height:'70vh', width: '100%', position:'relative'}}>
//       <img style={{position:'absolute', bottom:'-5rem'}}
//         className="d-block w-100"
//         src={img2}
//         alt="Second slide"
//       />

//       <Carousel.Caption>
//         {/* <h3>Second slide label</h3> */}
//         {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item style={{height:'70vh', width: '100%', position:'relative'}}>
//       <img style={{position:'absolute', bottom:'-10rem'}}
//         className="d-block w-100"
//         src={img3}
//         alt="Third slide"
//       />

//       <Carousel.Caption>
//         {/* <h3>Third slide label</h3> */}
//         <p>
//           No te pierdas las novedades.
//         </p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
//     </div>
//   );
// }

// export default ControlledCarousel;



// import React, { useState, useEffect } from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import "/src/assets/css/CarouselContacto.css";
// import image12 from '../assets/images/tienda/image12.jpg';
// import img2 from '../assets/images/carousel/img2.jpg';
// import img3 from '../assets/images/carousel/img3.jpg';

// function ControlledCarousel() {
//   const lyrics = [
//     "Kissing, I hope they caught us",
//     "Whether they like or not",
//     "I wanna show you off",
//     "I wanna show you off",
//     "I wanna brag about it",
//     "I wanna tie the knot",
//     "I wanna show you off"
//   ];

//   const delay = 100; // ajusta el valor según la velocidad deseada
//   const [displayedText, setDisplayedText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     let currentText = "";

//     const interval = setInterval(() => {
//       if (currentText.length < lyrics[currentIndex].length) {
//         currentText = lyrics[currentIndex].substring(0, currentText.length + 1);
//         setDisplayedText(currentText);
//       } else {
//         setTimeout(() => {
//           currentText = "";
//           setDisplayedText(currentText);

//           setCurrentIndex((prevIndex) => (prevIndex + 1) % lyrics.length);
//         }, delay * 5);
//       }
//     }, delay);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div>
//       <Carousel>
//         <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
//           <img
//             style={{ position: 'absolute', bottom: '-43rem' }}
//             className="d-block w-100"
//             src={image12}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>Contacta con Petit Amazones,</h3>
//             <p>te asesoraremos</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
//           <img
//             style={{ position: 'absolute', bottom: '-5rem' }}
//             className="d-block w-100"
//             src={img2}
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h3>{displayedText}</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
//           <img
//             style={{ position: 'absolute', bottom: '-10rem' }}
//             className="d-block w-100"
//             src={img3}
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <p>
//               No te pierdas las novedades.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default ControlledCarousel;


// esto es para que aparezca una foto, otra foto y otra

// import React, { useState, useEffect } from "react";
// import "/src/assets/css/CarouselContacto.css";
// import image12 from '../assets/images/tienda/image12.jpg';
// import img2 from '../assets/images/carousel/img2.jpg';
// import img3 from '../assets/images/carousel/img3.jpg';

// function ControlledCarousel() {
//   const lyrics = [
//     "Kissing, I hope they caught us",
//     "Whether they like or not",
//     "I wanna show you off",
//     "I wanna show you off",
//     "I wanna brag about it",
//     "I wanna tie the knot",
//     "I wanna show you off"
//   ];

//   const delay = 100; // adjust the value based on the desired speed
//   const [displayedText, setDisplayedText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     let currentText = "";

//     const interval = setInterval(() => {
//       if (currentText.length < lyrics[currentIndex].length) {
//         currentText = lyrics[currentIndex].substring(0, currentText.length + 1);
//         setDisplayedText(currentText);
//       } else {
//         setTimeout(() => {
//           currentText = "";
//           setDisplayedText(currentText);

//           setCurrentIndex((prevIndex) => (prevIndex + 1) % lyrics.length);
//         }, delay * 5);
//       }
//     }, delay);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="image-slider">
//       <div className="image-container">
//         <img
//           className="image"
//           src={image12}
//           alt="Slide 1"
//           style={{ opacity: currentIndex === 0 ? 1 : 0 }}
//         />
//         <img
//           className="image"
//           src={img2}
//           alt="Slide 2"
//           style={{ opacity: currentIndex === 1 ? 1 : 0 }}
//         />
//         <img
//           className="image"
//           src={img3}
//           alt="Slide 3"
//           style={{ opacity: currentIndex === 2 ? 1 : 0 }}
//         />
//       </div>
//       <div className="caption">
//         <h3>{displayedText}</h3>
//       </div>
//     </div>
//   );
// }

// export default ControlledCarousel;





// import React, { useState, useEffect } from "react";
// import "/src/assets/css/CarouselContacto.css";
// import image12 from '../assets/images/tienda/image12.jpg';
// import img3 from '../assets/images/carousel/img3.jpg';

// function ControlledCarousel() {
//   const images = [img3, image12];
//   const lyrics = [
//     "Contácta con nosotros, te asesoraremos",
//     "Contácta con nosotros, te asesoraremos"
//   ];

//   const delay = 100; // adjust the value based on the desired speed
//   const [displayedText, setDisplayedText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     let currentText = "";

//   const interval = setInterval(() => {
//     if (currentText.length < lyrics[currentIndex].length) {
//       currentText = lyrics[currentIndex].substring(0, currentText.length + 1);
//     } else {
//       currentText = "";
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % lyrics.length);
//     }

//     setDisplayedText(currentText);
//   }, delay);

//   return () => clearInterval(interval);
// }, [currentIndex]);


//   return (
//     <div className="image-slider">
//       <div className="image-container">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             className={`image ${index === currentIndex ? "active" : ""}`}
//             src={image}
//             alt={`Slide ${index + 1}`}
//           />
//         ))}
//       </div>
//       <div className="caption">
//         <h3>{displayedText}</h3>
//       </div>
//     </div>
//   );
// }

// export default ControlledCarousel;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "/src/assets/css/CarouselContacto.css";
import image12 from '../assets/images/tienda/image12.jpg';
import image2 from '../assets/images/tienda/image2.jpg';
import img5 from '../assets/images/carousel/img5.jpg';
import img6 from '../assets/images/carousel/img6.jpg';



const App = () => {
  return (
    <Carousel fade interval={1000}>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={image12} alt="First slide" style={{ position: 'absolute', bottom: '-10rem' }} />
        <Carousel.Caption>
          <h3>Contacta con Petit Amazones, <br />te asesoraremos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={image2} alt="Second slide" style={{ position: 'absolute', bottom: '-10rem' }} />
        <Carousel.Caption>
          <h3>Contacta con Petit Amazones, <br />te asesoraremos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={img5} alt="Third slide" style={{ position: 'absolute', bottom: '-10rem' }} />
        <Carousel.Caption>
          <h3>Contacta con Petit Amazones, <br />te asesoraremos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={img6} alt="Fourth slide" style={{ position: 'absolute', bottom: '-10rem' }} />
        <Carousel.Caption>
          <h3>Contacta con Petit Amazones, <br />te asesoraremos</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default App;
