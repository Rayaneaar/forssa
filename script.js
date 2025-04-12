// JavaScript for auto fade
const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

function changeImage() {
  // Remove 'active' class from the current image
  images[currentIndex].classList.remove('active');

  // Update index to the next image
  currentIndex = (currentIndex + 1) % images.length;

  // Add 'active' class to the new current image
  images[currentIndex].classList.add('active');
}

// Change image every 4 seconds
setInterval(changeImage, 4000);
