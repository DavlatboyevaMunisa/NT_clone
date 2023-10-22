const dataJobs = [
  {
    src: './images/epam.svg',
  },
  {
    src: './images/itechart.svg',
  },
  {
    src: './images/humo.svg',
  },
  {
    src: './images/agrobank.svg',
  },
  {
    src: './images/davrbank.svg',
  },
  {
    src: './images/texnomart.svg',
  },
  {
    src: './images/soliq.svg',
  },
  {
    src: './images/uzcard.svg',
  },
  {
    src: './images/my-taxi.svg',
  },
  {
    src: './images/mfaktor.svg',
  },
  {
    src: './images/jafton.svg',
  },
  {
    src: './images/fido-studio.svg',
  },
  {
    src: './images/osmondagi-bolalar.svg',
  },
  {
    src: './images/islom-uz.svg',
  },
  {
    src: './images/cambridge.svg',
  },
  {
    src: './images/kunuz.svg',
  },
  {
    src: './images/yoshlar-ishlari.svg',
  },
  {
    src: './images/pcg.svg',
  },
];

const jobsList = document.querySelector('.jobs__list');

const renderJobs = () => {
  for (el of dataJobs) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', el.src);
    li.appendChild(img);
    jobsList.appendChild(li);
  }
};

renderJobs();

const modeToggler = document.querySelector('.header-top-mode');
const body = document.querySelector('body');

if (localStorage.getItem('mode') == 'dark') {
  body.classList.add('dark');
}
modeToggler.addEventListener('click', () => {
  if (localStorage.getItem('mode') == 'light') {
    localStorage.setItem('mode', 'dark');
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('mode', 'light');
  }
});

const firstVideo = document.querySelector('.first');
const secondVideo = document.querySelector('.second');
const thirdVideo = document.querySelector('.third');
const fourthVideo = document.querySelector('.fourth');
const firstButton = document.querySelector('.first-btn');
const firstPause = document.querySelector('.first-pause');
const secondButton = document.querySelector('.second-btn');
const secondPause = document.querySelector('.second-pause');
const thirdButton = document.querySelector('.third-btn');
const thirdPause = document.querySelector('.third-pause');
const fourthButton = document.querySelector('.fourth-btn');
const fourthPause = document.querySelector('.fourth-pause');

firstButton.addEventListener('click', () => {
  firstVideo.play();
  secondVideo.pause();
  thirdVideo.pause();
  fourthVideo.pause();
  firstPause.style.display = 'flex';
  firstButton.style.display = 'none';
});

firstPause.addEventListener('click', () => {
  firstVideo.pause();
  firstButton.style.display = 'flex';
  firstPause.style.display = 'none';
});

secondButton.addEventListener('click', () => {
  secondVideo.play();
  firstVideo.pause();
  thirdVideo.pause();
  fourthVideo.pause();
  secondPause.style.display = 'flex';
  secondButton.style.display = 'none';
});

secondPause.addEventListener('click', () => {
  secondVideo.pause();
  secondButton.style.display = 'flex';
  secondPause.style.display = 'none';
});

thirdButton.addEventListener('click', () => {
  thirdVideo.play();
  firstVideo.pause();
  secondVideo.pause();
  fourthVideo.pause();
  thirdPause.style.display = 'flex';
  thirdButton.style.display = 'none';
});

thirdPause.addEventListener('click', () => {
  thirdVideo.pause();
  thirdButton.style.display = 'flex';
  thirdPause.style.display = 'none';
});

fourthButton.addEventListener('click', () => {
  fourthVideo.play();
  firstVideo.pause();
  secondVideo.pause();
  thirdVideo.pause();
  fourthPause.style.display = 'flex';
  fourthButton.style.display = 'none';
});

fourthPause.addEventListener('click', () => {
  fourthVideo.pause();
  fourthButton.style.display = 'flex';
  fourthPause.style.display = 'none';
});

const carouselList = document.querySelector('.videos');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

nextBtn.addEventListener('click', () => {
  prevBtn.style.backgroundColor = '#ba8d5b';
  console.log(carouselList.scrollLeft);
  if (carouselList.scrollLeft >= 466.3999938964844) {
    nextBtn.style.backgroundColor = '#333';
  } else {
    carouselList.scrollLeft += 215;
  }
});

prevBtn.addEventListener('click', () => {
  nextBtn.style.backgroundColor = '#ba8d5b';
  if (carouselList.scrollLeft == 0) {
    prevBtn.style.backgroundColor = '#333';
  } else {
    carouselList.scrollLeft -= 215;
  }
});

const modeTogglerMobile = document.querySelector('#header-top-mode');

modeTogglerMobile.addEventListener('click', () => {
  body.classList.toggle('dark');
});

const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.menu-close');
const menu = document.querySelector('.nav-mobile');

openMenu.addEventListener('click', () => {
  menu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
});
