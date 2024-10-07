export const useTab = (swiper) => {
  const switchControls = document.querySelector('.hero__switch');

  switchControls.addEventListener('click', (e) => {
    const switchLink = e.target.closest('.hero__switch-link');
    if (!switchLink) return;

    e.preventDefault();

    if (switchLink.classList.contains('hero__switch-link--active')) return;

    const allSliders = document.querySelectorAll('.hero__article');
    const switchContentID = switchLink.getAttribute('href');
    const switchSliders = document.querySelectorAll(switchContentID);
    const activeLink = document.querySelector('.hero__switch-link--active');
    const activeSliders = document.querySelector('.hero__slider');

    console.log(switchContentID);
    if (activeLink) {
      activeLink.classList.remove('hero__switch-link--active');
    }

    if (switchContentID === '#View-all') {
      allSliders.forEach((item) => {
        item.style.display = 'block';
      });
      swiper.update();
      /* console.log('VIEW ALL = все слайды видимыми.'); */
    } else if (activeSliders) {
      allSliders.forEach((item) => {
        item.style.display = 'none';
        /*  console.log('делаем слайды не видимыми.'); */
      });
      switchSliders.forEach((item) => {
        item.style.display = 'block';
        /*  console.log('!нужные слайды видимыми.'); */
      });
      swiper.update();
    }

    switchLink.classList.add('hero__switch-link--active');
  });
};
