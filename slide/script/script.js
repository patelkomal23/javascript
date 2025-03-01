
let slideIndex = 1;
//   console.log(slideItem[0]);
let dots = document.querySelectorAll(".dot");
let setSlide =(n)=>{
  slideIndex=n;
  displaySlide(slideIndex);

};


let currSlide = (n) => {
  displaySlide((slideIndex += n));
};

let displaySlide = (n) => {
  let slideItem = document.querySelectorAll(".slider-item");
  console.log(n);
  console.log(slideIndex);

  if (n > slideItem.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slideItem.length;
  }

  for (let i = 0; i < slideItem.length; i++) {
    slideItem[i].classList.remove("active");
  }
  slideItem[slideIndex - 1].classList.add("active");

dots.forEach((dot) => dot.classList.remove("active-dot"));
dots[slideIndex - 1].classList.add("active-dot");
};


setInterval(() => {
      currSlide(1);
  
  }, 5000);
  
