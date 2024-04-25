export function imageZoomEffect() {
    const images = document.querySelectorAll('.image-container img');
  
    images.forEach(image => {
      image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'transform 0.3s ease';
        image.style.zIndex = '1'; // imagen por encima de las otras
      });
  
      image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        image.style.zIndex = '0';
      });
    });
  }
  