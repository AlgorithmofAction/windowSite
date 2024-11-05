const burgerMenu = document.querySelector('.burger__menu')
const headerNav = document.querySelector('.header__nav')
const headerBtn = document.querySelector('.header__btn-mobile')
const menuLink = document.querySelectorAll('.menu__link');


burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger__menu-active')
  if(burgerMenu.classList.contains('burger__menu-active')){
    headerNav.classList.add('header__nav-active')  
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
  }else{
    headerNav.classList.remove('header__nav-active')
    headerBtn.classList.add('header__btn')
    document.body.style.overflow = 'visible';
    document.body.style.height = 'auto';
  }

  if (headerNav.classList.contains('header__nav-active')) {
    headerBtn.classList.add('header__btn-mobile-active');
    headerNav.append(headerBtn);
} else {
    headerBtn.classList.remove('header__btn-mobile-active');
    headerNav.after(headerBtn);
}


})
menuLink.forEach(function(link){
  link.addEventListener('click',function() {   
    headerNav.classList.remove('header__nav-active')
    burgerMenu.classList.remove('burger__menu-active')
    document.body.style.overflow = 'visible';
    document.body.style.height = 'auto';
  })
})
