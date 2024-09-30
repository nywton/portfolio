document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.main__img img');
  let currentIndex = 0;

  // Function to show current image and hide others
  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('hidden', i !== index);
    });
  }

  // Initially show the first image
  showImage(currentIndex);

  // Set interval to change image every 1 second
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 1000);
});

function dark() {
  document.body.classList.toggle("dark");
}