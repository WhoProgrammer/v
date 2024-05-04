
{
  function myFunction() {
    var toggle = document.getElementById("myDIV");
    if (toggle.style.opacity === "0") {
        toggle.style.opacity = "1"
        toggle.style.top = 0
    } else {
        toggle.style.opacity = "0"
        toggle.style.top = "-100%"
    }
    }
}

{document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.hero .slider');
    let slideIndex = 0;
    const slides = document.querySelectorAll('.hero .slide');
    const slideWidth = slides[0].clientWidth;
  
    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      updateSlider();
    }
  
    function updateSlider() {
      const offset = -slideIndex * slideWidth;
      slider.style.transform = `translateX(${offset}px)`;
    }
  
    setInterval(nextSlide, 5000); // Change slide every 3 seconds
  });}
{
  let sec6Crd = document.querySelectorAll(".section6 .card-div .card")
  let sec6img = document.querySelector(".section6 .img-box")
  let img = document.querySelector(".section6 .img-box img")
function showDiv(length, imgSrc) {
  sec6Crd[length].addEventListener("click", () => {
    sec6img.style.scale = 1
    img.removeAttribute("src")
    img.setAttribute("src", imgSrc)
  })
  sec6img.addEventListener("click", () => {
    sec6img.style.scale = 0
  })
}

showDiv(0, "img/vegetable1.jpeg")
showDiv(1, "img/vegetable2.jpeg")
showDiv(2, "img/vegetable3.jpeg")
showDiv(3, "img/vegetable4.jpeg")
showDiv(4, "img/vegetable5.jpeg")
showDiv(5, "img/vegetable6.jpeg")
  }

  // section7
  
  {
    let slideIndex = 0;
const slides = document.querySelectorAll('.section7 .slide');

function moveSlide(direction) {
slideIndex += direction;
if (slideIndex < 0) {
slideIndex = slides.length - 1;
}
if (slideIndex >= slides.length) {
slideIndex = 0;
}
const offset = -slideIndex * slides[0].offsetWidth;
document.querySelector('.section7 .slider').style.transform = `translateX(${offset}px)`;
}
}
      