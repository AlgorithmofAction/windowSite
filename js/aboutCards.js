const aboutItemBtn = document.querySelectorAll('.about__item');
const aboutWrapperContent = document.querySelectorAll('.about__list-content-wrapper');

aboutItemBtn.forEach(function(item) {
  item.addEventListener('click', () => {
    let aboutBtn = item;
    let aboutTab = aboutBtn.getAttribute('data-about');
    let currentAboutTab = document.querySelector(aboutTab);
    if( ! aboutBtn.classList.contains('about__item-active', 'about__card-active')){
      aboutItemBtn.forEach(function(item) {
        item.classList.remove('about__item-active')
      });

      aboutWrapperContent.forEach(function(content) {
        content.classList.remove('about__card-active')
      });

      aboutBtn.classList.add('about__item-active');
      currentAboutTab.classList.add('about__card-active');
    }
  })
})
