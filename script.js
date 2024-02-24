document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("top");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  const images = [
    'images/IMG_2462.jpeg',
    'images/IMG_2463.jpeg',
    'images/IMG_2464.jpeg',
    'images/IMG_2465.jpeg',
    'images/IMG_2466.jpeg',
    'images/IMG_2467.jpeg',
    'images/IMG_2468.jpeg',
  ];
  let currentIndex = 0;

  const victimsImg = document.getElementById('victims');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  function updateImage() {
    victimsImg.src = images[currentIndex];
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
  }

  prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateImage();
    }
  });

  nextBtn.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateImage();
    }
  });

  updateImage();
});