const productItemBtn = document.querySelectorAll('.product__item');
const productItemContent = document.querySelectorAll('.product__card-wrapper');

productItemBtn.forEach(function(item) {
  item.addEventListener('click', () => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    if( ! currentBtn.classList.contains('product__item-active','product-card-active')){
      productItemBtn.forEach(function(item) {
        item.classList.remove('product__item-active')
      });
  
      productItemContent.forEach(function(content) {
        content.classList.remove('product-card-active')
      });
    
  
      currentBtn.classList.add('product__item-active');
      currentTab.classList.add('product-card-active')
  
    }

    
  })
})