let carousel = document.querySelector('.carousel');
let stage = document.querySelector('.carousel-stage');
let prev = document.querySelector('.carousel-nav-item.carousel-prev.fa.fa-chevron-left');
let next = document.querySelector('.carousel-nav-item.carousel-next.fa.fa-chevron-right');
let slide = document.querySelectorAll('.single-slide')
let slideWidth = slide[0].clientWidth;
console.log(slideWidth);
let currentIndex = 0;
let slidesNumber = slide.length - 1;


function goToSlide(index) {
    if(index > slidesNumber) {
        index = 0
    } else if(index < 0) {
        index = slidesNumber
    }
    carousel.style.left = -1 * slideWidth * index;
    currentIndex = index;
    
}

 function slideToNext() { 
      goToSlide(currentIndex + 1);
 }

function slideToPrev() {
    goToSlide(currentIndex - 1);
}

function bindEvents() {
    prev.addEventListener('click', slideToPrev);
    next.addEventListener('click', slideToNext);
    document.addEventListener('keydown', function(event) {
        console.log(event.key);
        if(event.key === 'ArrowLeft') {
            slideToPrev();
        } else if(event.key === 'ArrowRight') {
            slideToNext();
        }
    })
}

bindEvents();

setInterval(slideToNext, 5000)




