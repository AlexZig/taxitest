let LinksAll = document.querySelectorAll('.ways__item');
let modelsAll = document.querySelectorAll('.models__item');
let models = document.querySelector('.models');
for (let i = 0; i < LinksAll.length; i++) {
  console.log(i)
  LinksAll[i].onclick = function () {
    console.log(models)
    models.classList.add('_active');
    modelsAll[i].classList.add('_active');
    models.onclick = function (i) {
      models.classList.remove('_active');
      modelsAll[i].classList.remove('_active');
    }
  }
}




const swiper = new Swiper('.ways__list', {
  slidesPerView: 2.5,
  spaceBetween: 20,

});