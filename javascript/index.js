let destination = new Date("Jan 9, 2025 10:00:00").getTime();

let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = destination - now;

    let days = ~~(distance / (1000 * 60 * 60 * 24));
    let hours = ~~((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = ~~((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = ~~((distance % (1000 * 60)) / 1000);
    $("#hour").html(hours);
    $("#day").html(days);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);

    if(distance < 0) {
        clearInterval(x);
    }
}, 1000);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}