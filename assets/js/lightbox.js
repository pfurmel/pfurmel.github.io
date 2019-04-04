//BES 001 abd generic lightbox script
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
//TTSH Lightbox script
function openTTSHModal() {
  document.getElementById('TTSHModal').style.display = "block";
}

function closeTTSHModal() {
  document.getElementById('TTSHModal').style.display = "none";
}

var TTSHslideIndex = 1;
showTTSHSlides(TTSHslideIndex);

function plusTTSHSlides(n) {
  showTTSHSlides(TTSHslideIndex += n);
}

function currentTTSHSlide(n) {
  showTTSHSlides(TTSHslideIndex = n);
}

function showTTSHSlides(n) {
  var i;
  var slides = document.getElementsByClassName("TTSHSlides");
  var dots = document.getElementsByClassName("TTSH");
  var captionText = document.getElementById("TTSHcaption");
  if (n > slides.length) {TTSHslideIndex = 1}
  if (n < 1) {TTSHslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[TTSHslideIndex-1].style.display = "block";
  dots[TTSHslideIndex-1].className += " active";
  captionText.innerHTML = dots[TTSHslideIndex-1].alt;
}
//BES 003 Lightbox script
function openBES3Modal() {
  document.getElementById('BES3Modal').style.display = "block";
}

function closeBES3Modal() {
  document.getElementById('BES3Modal').style.display = "none";
}

var BES3slideIndex = 1;
showBES3Slides(BES3slideIndex);

function plusBES3Slides(n) {
  showBES3Slides(BES3slideIndex += n);
}

function currentBES3Slide(n) {
  showBES3Slides(BES3slideIndex = n);
}

function showBES3Slides(n) {
  var i;
  var slides = document.getElementsByClassName("BES3Slides");
  var dots = document.getElementsByClassName("BES3");
  var captionText = document.getElementById("BES3caption");
  if (n > slides.length) {TTSHslideIndex = 1}
  if (n < 1) {BES3slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[BES3slideIndex-1].style.display = "block";
  dots[BES3slideIndex-1].className += " active";
  captionText.innerHTML = dots[BES3slideIndex-1].alt;
}