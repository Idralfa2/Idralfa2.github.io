// Sélectionner tous les éléments à afficher avec la classe "fade-item"
window.addEventListener('load', function () {
  const fadeItems = document.querySelectorAll('.fade-item');

  // Fonction pour ajouter la classe "visible" avec un délai
  fadeItems.forEach((item, index) => {
      setTimeout(() => {
          item.classList.add('visible');
      }, index * 500); // Délai de 500ms entre chaque élément
  });
});

// Carrousel : gérer les images
document.querySelectorAll('.carousel').forEach(carousel => {
  const slides = carousel.querySelector('.carousel-images');
  const totalSlides = slides.children.length;

  // Ajuster la largeur totale pour contenir toutes les images
  slides.style.width = `${totalSlides * 100}%`;

  // Affiche la première diapositive
  showSlide(carousel.id, 0);
});

function showSlide(carouselId, index) {
  const carousel = document.getElementById(carouselId);
  const slides = carousel.querySelector('.carousel-images');
  const totalSlides = slides.children.length;

  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;

  carousel.dataset.currentSlide = index;
  const offset = -index * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide(carouselId) {
  const carousel = document.getElementById(carouselId);
  const currentSlide = parseInt(carousel.dataset.currentSlide || 0, 10);
  showSlide(carouselId, currentSlide + 1);
}

function prevSlide(carouselId) {
  const carousel = document.getElementById(carouselId);
  const currentSlide = parseInt(carousel.dataset.currentSlide || 0, 10);
  showSlide(carouselId, currentSlide - 1);
}

// Script de défilement : gestion de l'opacité d'un conteneur
const fadeContainer = document.getElementById('fadeContainer');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const maxScroll = 200; // La distance après laquelle l'élément est complètement invisible
  const opacity = Math.max(0, 1 - scrollPosition / maxScroll);
  fadeContainer.style.opacity = opacity;
});

window.addEventListener('scroll', function() {
  const headerHeight = document.querySelector('header').offsetHeight; // Hauteur du header
  const scrollPosition = window.scrollY; // Position de défilement actuelle
  
  // Si le défilement est inférieur à la hauteur du header, on applique l'effet de fondu
  if (scrollPosition <= headerHeight) {
    // Calculer l'opacité en fonction du défilement par rapport à la hauteur du header
    const opacity = scrollPosition / headerHeight; // Opacité augmente en fonction du défilement
    const fondNoir = document.querySelector('.fond-noir');
    fondNoir.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`; // Appliquer l'opacité calculée
  }
  // Si le défilement dépasse la hauteur du header, on garde l'opacité maximale
  else {
    const fondNoir = document.querySelector('.fond-noir');
    fondNoir.style.backgroundColor = 'rgba(0, 0, 0, 1)'; // Opacité maximale
  }
});
