document.addEventListener('DOMContentLoaded', () => {
  animateLoading();
  animateStartIcons(1300);
});

function toggleDark() {
  document.body.classList.toggle("dark");
  toggleVisibility();
}

function toggleVisibility() {
  const btnLight = document.getElementById('toggleLight');
  const btnDark = document.getElementById('toggleDark');

  btnLight.classList.toggle('hidden');
  btnDark.classList.toggle('hidden');
}

function animateLoading() {
  gsap.fromTo(
    ".loading",
    {
      opacity: 1
    },
    {
      opacity: 0,
      display: "none",
      duration: .5,
      delay: 2.2,
    }
  );

  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
    }
  );
}

function animateStartIcons(duration) {
  let currentIndex = 0;

  const images = document.querySelectorAll('.start_carousell svg');

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('hidden', i !== index);
    });
  }

  showImage(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, duration);
}

