// Gallery Functionality
const galleryImages = ['Ryan-Art.JPG', 'Ryan-Gallery2.JPG'];
let currentImageIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  document.querySelector('.gallery-img').src = `images/${galleryImages[currentImageIndex]}`;
});

document.querySelector('.prev').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  document.querySelector('.gallery-img').src = `images/${galleryImages[currentImageIndex]}`;
});

// Hexagon Easter Eggs
document.querySelectorAll('.hex').forEach((hex) => {
  hex.addEventListener('click', function () {
    document.querySelector('.gallery-img').src = 'images/Sylvia-1.JPG';
    alert(this.dataset.quote);
  });
});
