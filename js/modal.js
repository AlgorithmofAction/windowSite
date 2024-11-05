const modalBtn = document.querySelectorAll('.modal-btn');
const closeModalWindow = document.querySelectorAll('.modal-close');
const modalBox = document.querySelector('.modal__box');
const scrollHidde = document.querySelector('html')


modalBtn.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    document.querySelector(`[data-modal="${path}"]`).classList.add('modal__box-open');
    modalBox.classList.add('modal__box-open');
    scrollHidde.classList.add('scroll-hidde');
  });
  closeModalWindow.forEach((el) => {
    el.addEventListener('click', () => {
      const modalActive = document.querySelector('.modal__box-open');
      modalActive.classList.remove('modal__box-open');
      scrollHidde.classList.remove('scroll-hidde')
    });
  });
});

window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') {
   let closeExit = document.querySelectorAll('.modal__box')
   closeExit.forEach(function (item) {
    item.classList.remove('modal__box-open')
   })
  }
  scrollHidde.classList.remove('scroll-hidde')
})