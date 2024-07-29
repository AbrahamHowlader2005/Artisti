// ========================================
// Preloader added
// ========================================
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('loaded');
    }, 1000);
    setTimeout(() => {
      preloader.remove();
    }, 2000);
  });
}

// ========================================
// Animation on scroll
// ========================================
  AOS.init({
  duration:1000,
  easing: "ease",
})


// ========================================
// Slider Timer added
// ========================================
$('.carousel').carousel({
  interval:4000
})


