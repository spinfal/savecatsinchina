document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("top");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  const images = [
    'images/1.jpeg',
    'images/2.jpeg',
    'images/3.jpeg',
    'images/4.jpeg',
    'images/5.jpeg',
    'images/6.jpeg',
    'images/7.jpeg',
    'images/8.jpeg',
    'images/9.jpeg',
    'images/10.jpeg',
    'images/11.jpeg',
    'images/12.jpeg',
    'images/13.jpeg',
    'images/14.jpeg',
    'images/15.jpeg',
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