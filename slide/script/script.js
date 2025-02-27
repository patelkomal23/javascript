let slideIndex = 0;
let sildeItem = document.querySelectorAll('.slider-item');
console.log(sildeItem[0]);

let currenSlide = (n) => {
    displaySlide(slideIndex+=n);
    console.log(slideIndex);
    
}
let displaySlide = (slideIndex) => {
    for (let i = 0; i < sildeItem.length; i++) {
        sildeItem[i].classList.remove('active');
    }
    sildeItem[slideIndex].classList.add('active');


}