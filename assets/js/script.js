document.addEventListener('DOMContentLoaded', () => {
  animateLoading();
  setupCaroussell(1500);

  const navButtons = document.querySelectorAll('.t-shadow');

  setTimeout(function() {
    navButtons.forEach((btn) => {
      btn.classList.toggle('t-shadow-pressed');
    })
  }, 3000);
});

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

function setupCaroussell(duration) {
  let currentIndex = 0;

  const images = document.querySelectorAll('.start_carousell svg');

  setupColorTimer(1500);
  setCarousellClickEvent();


  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    images.forEach((img, i) => {
      img.classList.toggle('hidden', i !== currentIndex);
    });
  }, duration);
}

// Changes the icons frame backrgound color after a delay
function setupColorTimer(time) {
  const colors = ['#ffde88', '#b2c2df', '#fed3f7', '#c8fcea', '#e1bfbc', '#00c6d1', '#def5f6', '#8885ef'];
  let currentIndex = 0;

  setInterval(function () {
    currentIndex = (currentIndex + 1) % colors.length;
    const colorSwitcher = document.getElementById('color-switcher');
    colorSwitcher.style.backgroundColor = colors[currentIndex];
  }, time);
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


function setCarousellClickEvent() {

  // Active class
  const cssClass = 't-shadow-pressed';

  const carousell = document.getElementById('color-switcher');
  const btnStart = document.getElementById('btn-start');

  carousell.addEventListener('mousedown', () => {
    carousell.classList.add(cssClass);
    btnStart.classList.remove(cssClass);
  });

  carousell.addEventListener('mouseup', () => {
    carousell.classList.remove(cssClass);
    btnStart.classList.add(cssClass);
  });

  // Optional: Handle mouse leave in case the user drags the mouse outside the div
  carousell.addEventListener('mouseleave', () => {
    carousell.classList.remove(cssClass);
  });

  carousell.addEventListener('click', () => {
    const currentColor = window.getComputedStyle(carousell).backgroundColor;
    btnStart.style.backgroundColor = currentColor;
    btnStart.style.color= '#110d26';
  });
}

function toggleDark() {
  document.body.classList.toggle("dark");
  toggleVisibility();
}

function toggleVisibility() {
  const navButtons = document.querySelectorAll('#nav-controls .btn-nav');

  navButtons.forEach((btn) => {
    btn.classList.toggle('hidden');
  });
}
