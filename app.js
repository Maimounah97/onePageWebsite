
// slide show
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// popup message

function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')
  var popup = document.getElementById('popup');
  popup.classList.toggle('active')

}

// animation while scrolling

const feader = document.querySelector('.fade-in');
const options = { threshold: 0, rootMargin: "0px 0px 0px 200px"};
const appearOnScroll = new IntersectionObserver(function (entries , appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      return;
    }
    else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  }) 
}, options);

appearOnScroll.observe(feader);

// services appears from left and right

const fromLeft = document.querySelector(".from-left");
const fromRight = document.querySelector(".from-right");

appearOnScroll.observe(fromLeft);
appearOnScroll.observe(fromRight);

// footer appears from bottom

const fromBottom = document.querySelectorAll(".from-bottom");

fromBottom.forEach(fromBottom => {
  appearOnScroll.observe(fromBottom);
});
