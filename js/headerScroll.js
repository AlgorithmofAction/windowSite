    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header')
        const scrollPosition = window.scrollY;
        const maxScroll = 1; // Максимальная высота скролла, при которой шапка станет прозрачной
        if(maxScroll <=scrollPosition) {
            header.style.backgroundColor = `rgba(255, 255, 255, 0.5`;
        }else{
            header.style.backgroundColor = `rgb(255, 255, 255`;
        }
    });