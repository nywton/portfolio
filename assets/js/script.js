document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.main__img svg');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('hidden', i !== index);
    });
  }

  showImage(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 1000);
});

function dark() {
  document.body.classList.toggle("dark");
}