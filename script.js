const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close');
const prevBtn = lightbox.querySelector('.prev');
const nextBtn = lightbox.querySelector('.next');
const filterButtons = document.querySelectorAll('.filters button');

let currentIndex = 0;

function showLightbox(index) {
  lightbox.style.display = 'flex';
  lightboxImg.src = galleryImages[index].src;
  currentIndex = index;
}

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => showLightbox(index));
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showLightbox(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showLightbox(currentIndex);
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filters .active').classList.remove('active');
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');
    galleryImages.forEach(img => {
      if (filter === 'all' || img.dataset.category === filter) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});
