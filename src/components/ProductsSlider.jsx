import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import "/src/assets/css/ProductsSlider.css";
import '/src/index.css';

import cachorro from '../assets/images/tienda/cachorro-juega.jpg'
import camaleon from '../assets/images/tienda/camaleon-cuerda.jpg'
import gato from '../assets/images/tienda/gat-bed.jpg'
import hamster from '../assets/images/tienda/hamster-rueda.jpeg'
import fishTank from '../assets/images/tienda/fish-tank.jpg'
import parakeet from '../assets/images/tienda/parakeet-shower.jpg'


const slider = [
    {
        title: "Perros",
        description: "Encuentra collares modernos, juguetes resistentes y cómodas camas para tu leal compañero canino.",
        image: cachorro
      },
      {
        title: "Reptiles",
        description: "Descubre terrarios personalizables, sustratos naturales y lámparas de calor para proporcionar un ambiente óptimo a tus reptiles.",
        image: camaleon
      },
      {
        title: "Gatos",
        description: "Descubre una variedad de juguetes, camas y accesorios elegantes para consentir a tu felino amigo.",
        image: gato
      },
    
      {
        title: "Roedores",
        description: "Encuentra juguetes y alimentos equilibrados para mimar a tus pequeños roedores.",
        image: hamster
      },
      {
        title: "Peces",
        description: "Explora acuarios innovadores, decoraciones submarinas y equipos de filtración para crear un hábitat acuático ideal.",
        image: fishTank
      },
      {
        title: "Aves",
        description: "Encuentra jaulas espaciosas, juguetes interactivos y alimentos nutritivos para mantener a tus aves felices y saludables.",
        image: parakeet
      },
]

const ServicesSlider = () => {
  return (
    <div className='carousel1'>
        <div>
            <div className='carousel-content'>
                <span>nuestros productos</span>
                <h1>Lo mejor para nuestros animales</h1>
                <hr />
                <p>Descubre nuestra selección de productos de alta calidad para perros, gatos, roedores, peces, aves y reptiles, diseñados para satisfacer todas las necesidades de tus adorables mascotas. ¡Cuida a tus compañeros con amor y calidad!</p>
                <a href="#" className='slider-btn'>ver más</a>
            </div>
        </div>

        <Swiper 
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        loop={true}
        pagination={{clickable: true}}

        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        breakpoints={{
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            },
            1560: {
                slidesPerView: 3
            },
        }}
        
        >
            {
                slider.map(data => (
                    <SwiperSlide style={{ backgroundImage: `url(${data.image})` }} className="myswiper-slider">
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                            <a href={`${data.url}`} target="_blank" className='slider-btn'>Explorar</a>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default ServicesSlider;