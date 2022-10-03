let cartA, cartB;
let cartActive = false;
let cartChecked = false;
let box = document.querySelector('.box');
let cards = box.querySelectorAll('.box__cart');
function randomPosition(){
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
    if (/webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.querySelector('body').style.backgroundColor = 'black';
    } else {
      document.querySelector('body').style.backgroundColor = 'green';
    }
  });
}
randomPosition();

box.onclick = function (e) {
  let cart = e.target;
  if (cartChecked == false && !cart.classList.contains('flip')) {
    console.log('ok')
    cart.classList.add('flip');
    if (cartActive == false) {
      cartA = cart;
      cartActive = true
    } else {
      cartB = cart;
      if (cartA.querySelector('img').src == cartB.querySelector('img').src) {
        cartA = '';
        cartB = '';
        cartActive = false;
      } else {
        cartChecked = true;
        setTimeout(() => {
          cartA.classList.remove('flip');
          cartB.classList.remove('flip');
          cartA = '';
          cartB = '';
          cartActive = false;
          cartChecked = false;
        }, 1000);
      }
    }
  }

}