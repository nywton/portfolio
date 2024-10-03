document.addEventListener('DOMContentLoaded', () => {
  animateLoading();
  animateStartIcons(1500);
  colorTimer(1500);

  setupIconsFrameClickEvent();
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

function switchColor() {
  const colors = ['#ffde88', '#b2c2df', '#fed3f7', '#c8fcea', '#e1bfbc', '#00c6d1', '#def5f6', '#8885ef'];
  let currentIndex = 0;

  document.getElementById('color-switcher').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % colors.length;
    this.style.transition = 'background-color 0.5s ease';
    this.style.backgroundColor = colors[currentIndex];
  });
}

// Changes the icons frame backrgound color after a delay
function colorTimer(time) {
  const colors = ['#ffde88', '#b2c2df', '#fed3f7', '#c8fcea', '#e1bfbc', '#00c6d1', '#def5f6', '#8885ef'];
  let currentIndex = 0;

  setInterval(function () {
    currentIndex = (currentIndex + 1) % colors.length;
    const colorSwitcher = document.getElementById('color-switcher');
    colorSwitcher.style.backgroundColor = colors[currentIndex];
  }, time);
}


function setupIconsFrameClickEvent() {

  // Active class
  const cssClass = 't-shadow-pressed';

  const myDiv = document.getElementById('color-switcher');
  const btnStart = document.getElementById('btn-start');

  myDiv.addEventListener('mousedown', () => {
    myDiv.classList.add(cssClass);
  });

  myDiv.addEventListener('mouseup', () => {
    myDiv.classList.remove(cssClass);
  });

  // Optional: Handle mouse leave in case the user drags the mouse outside the div
  myDiv.addEventListener('mouseleave', () => {
    myDiv.classList.remove(cssClass);
  });

  myDiv.addEventListener('click', () => {
    const currentColor = window.getComputedStyle(myDiv).backgroundColor;
    btnStart.style.backgroundColor = currentColor;
    btnStart.style.color= '#110d26';
  });
}
