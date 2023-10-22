const modeToggler = document.querySelector('.header-top-mode');
const body = document.querySelector('body');

modeToggler.addEventListener('click', () => {
  body.classList.toggle('dark');
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

const dataBlog = [
  {
    src: './images/image-1.png',
    date: '19-aprel, 2023',
    views: 119,
    title:
      "16-aprel kuni «Najot Ta'lim»da SMM menejerlari uchun story management",
    desc: "«SMM musobaqasi» bo'lib o'tdi",
    type: 'Musobaqa',
  },
  {
    src: './images/image-2.png',
    date: '19-aprel, 2023',
    views: 92,
    title:
      "Farg'ona filialida «Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimo",
    desc: '«Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimov bilan master-klass',
    type: 'Master-klass',
  },
  {
    src: './images/image-3.png',
    date: '19-aprel, 2023',
    views: 109,
    title:
      "SMM-menejer va Grafik dizaynerlar o'rtasidagi «Marketing Team» jamoaviy",
    desc: "«Marketing Team» musobaqasi g'oliblari e'lon qilindi",
    type: 'Musobaqa',
  },
  {
    src: './images/image-4.png',
    date: '19-aprel, 2023',
    views: 101,
    title:
      "2-aprel kuni bo'lib o'tgan dasturlash bo'yicha «Algoritmlash» musobaqasi",
    desc: "Dasturchilar o'rtasida «Algoritmlash» musobaqasi",
    type: 'Musobaqa',
  },
  {
    src: './images/image-5.png',
    date: '19-aprel, 2023',
    views: 187,
    title:
      '«Iwash» va «Carbon technologies» loyihalari asoschilari bilan «Shaxsiy',
    desc: 'Otabek Jurayev va Behzodbek Shoyunusovlar bilan master-klass',
    type: 'Master-klass',
  },
  {
    src: './images/image-6.png',
    date: '11-aprel, 2023',
    views: 270,
    title: '100 ga yaqin SMM-menejer va grafik dizaynerlar «Marketing Team»',
    desc: '«Marketing Team» jamoaviy musobaqasi',
    type: 'Musobaqa',
  },
];

const blogList = document.querySelector('.blog__cards');

const renderBlog = () => {
  for (el of dataBlog) {
    blogList.innerHTML += `
    <div class="card">
        <img
        src="${el.src}"
        alt="images"
        class="image__blog"
      />
      <button class="blog__type">${el.type}</button>
      <p class="blog__texts" >
      <span class="blog__date" >${el.date}</span>
      <span class="blog__views">${el.views}</span>
      </p>
      <h3 class="blog__title">${el.title}</h3>
      <p class="blog__text">${el.desc}</p>
    </div>
    `;
  }
};

renderBlog();
