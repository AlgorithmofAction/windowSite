const answerItem = document.querySelectorAll('.accordion_quest');

answerItem.forEach(function (item) {
  item.addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('accardion__answer-active')
    item.classList.toggle('accordion_quest-active')
  })
})


