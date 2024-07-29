const glitchLinks = document.querySelectorAll('.glitch-link');

glitchLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.dataset.text = link.textContent;
    link.textContent = '';
  });

  link.addEventListener('mouseleave', () => {
    link.textContent = link.dataset.text;
  });
});

// Zoom In Effect

const selectElement = document.querySelector('.view-control');

selectElement.addEventListener('mouseenter', () => {
  selectElement.classList.add('zoom-in');
});

selectElement.addEventListener('mouseleave', () => {
  selectElement.classList.remove('zoom-in');
});




// Grid Part Starts


var li_links = document.querySelectorAll(".links ul li");
var view_wraps = document.querySelectorAll(".view_wrap");
var list_view = document.querySelector(".list-view");
var grid_view = document.querySelector(".grid-view");

li_links.forEach(function(link){
	link.addEventListener("click", function(){
		li_links.forEach(function(link){
			link.classList.remove("active");
		})

		link.classList.add("active");

		var li_view = link.getAttribute("data-view");

		view_wraps.forEach(function(view){
			view.style.display = "none";
		})

		if(li_view == "list-view"){
			list_view.style.display = "block";
		}
		else{
			grid_view.style.display = "block";
		}
	})
})

// Image Aniamtion


const animatedImages = document.querySelectorAll(".animated-image");

animatedImages.forEach((image, index) => {
  image.style.transitionDelay = `${index * 0.1}s`;
  setTimeout(() => {
    image.style.opacity = 1;
    image.style.transform = "translateX(0)";
  }, 100);
  
  image.addEventListener("click", () => {
    animatedImages.forEach((img) => img.classList.remove("zoomed"));
    image.classList.add("zoomed");
  });
});

// Product Part Starts


document.addEventListener("DOMContentLoaded", function () {
  const featuredProducts = document.querySelectorAll(".featured-product");
  const fadeInRightElements = document.querySelectorAll(".fade-in-right");
  const fadeInElements = document.querySelectorAll(".fade-in");

  // Add glow effect to featured products on hover
  featuredProducts.forEach(product => {
    product.addEventListener("mouseenter", () => {
      product.querySelector(".product-glow").style.animation = "glow 1.5s infinite alternate";
    });

    product.addEventListener("mouseleave", () => {
      product.querySelector(".product-glow").style.animation = "none";
    });
  });

  // Add fade-in right effect to elements
  fadeInRightElements.forEach(element => {
    element.style.animationDelay = `${Math.random() * 0.5}s`;
    element.classList.add("fade-in-right");
  });

  // Add fade-in effect to elements
  fadeInElements.forEach(element => {
    element.style.animationDelay = `${Math.random() * 0.5}s`;
    element.classList.add("fade-in");
  });
});




