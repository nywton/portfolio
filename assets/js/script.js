document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.start_carousell svg');
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
  toggleVisibility();
}

function toggleVisibility() {
  const btnLight = document.getElementById('btn-switch-light');
  const btnDark = document.getElementById('btn-switch-dark');

  // Toggle the 'hidden' class on both elements
  btnLight.classList.toggle('hidden');
  btnDark.classList.toggle('hidden');
}