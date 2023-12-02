const firstIconForVisible = document.querySelector('.basket__main-select-all-icon');
const basketMainContent = document.querySelector('.basket__main-content');
const basketMainSelectAll= document.querySelector('.basket__main-select-all')
const allPriceProducts = document.querySelector('.all-price-products')
const secondIconForVisible = document.querySelector('.basket__absence-button')
const basketAbsenceContent = document.querySelector('.basket__absence-content')
let visibleFirst = false
let visibleSecond = true




firstIconForVisible.addEventListener('click', () => {
    basketMainContent.classList.toggle('basket__main-content-hidden')
    firstIconForVisible.classList.toggle('basket__main-select-all-icon-revert')


    if(visibleFirst){
        allPriceProducts.style.display = 'none'
        basketMainSelectAll.style.display = 'block'
    }else{
        allPriceProducts.style.display = 'block'
        basketMainSelectAll.style.display = 'none'
    }
    visibleFirst = !visibleFirst;
    console.log(visibleFirst)
});

secondIconForVisible.addEventListener('click',()=> {
    basketAbsenceContent.classList.toggle('basket__absence-content-hidden')
    secondIconForVisible.classList.toggle('basket__absence-button-revert')
    visibleSecond = !visibleSecond
})

