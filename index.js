var menu = document.querySelector('.menu');
var readmore = document.querySelector('.read-more');
var readmoreArrow = readmore.querySelector('.read-more__arrow');
var readmoreText = readmore.querySelector('.read-more__text');



readmore.addEventListener('click', function(){
    if(readmoreText.textContent === 'Показать все'){
        menu.classList.add('openMenu')
        readmoreText.textContent = 'Скрыть'
        readmoreArrow.style.transform = 'rotate(-180deg)'

    }else{
        menu.classList.remove('openMenu')
        readmoreText.textContent = 'Показать все'
        readmoreArrow.style.transform = 'rotate(0deg)'
    }
    
});