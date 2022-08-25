let LinksAll = document.querySelectorAll('.ways__item');
let modelsAll = document.querySelectorAll('.models__item');
let wrapper = document.querySelector('.wrapper');
for (let i = 0; i < LinksAll.length; i++) {
  LinksAll[i].onclick = function () {
    wrapper.classList.add('_active');
    modelsAll[i].classList.add('_active');
    wrapper.onclick = function () {
      wrapper.classList.remove('_active');
      modelsAll[i].classList.remove('_active');
    }
  }
}




const swiper = new Swiper('.ways__list', {
  slidesPerView: 2.5,
  spaceBetween: 20,

});