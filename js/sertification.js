const sertificat = document.querySelectorAll('.sertification__item');

sertificat.forEach(function(item){
  item.addEventListener('click', ()=> {
    item.classList.toggle('scale')
  })
})