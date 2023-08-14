//header
function toggleMenu() {
  var toggle = document.querySelector(".toggle");
  var nav = document.querySelector(".nav");
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
}

//card
const plansSwitch = document.querySelector(".plans-switch");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const businessPrice = document.querySelector(".business-price");
const planDuration = document.querySelectorAll(".plan-duration");

plansSwitch.addEventListener("change", () => {
  if (plansSwitch.checked) {
    basicPrice.innerText = "$220";
    professionalPrice.innerText = "$499";
    businessPrice.innerText = "$799";
    planDuration.forEach((p) => {
      p.innerText = "/ year";
    });
  } else {
    basicPrice.innerText = "$20";
    professionalPrice.innerText = "$48";
    businessPrice.innerText = "$80";
    planDuration.forEach((p) => {
      p.innerText = "/ month";
    });
  }
});
/*========= Testimonials ==============*/
const sliderElm = document.querySelector(".container_slider .slider");
const btnLeft = document.querySelector(".container_slider .btn-left");
const btnRight = document.querySelector(".container_slider .btn-right");
const numberSliderBoxs = sliderElm.children.length;
let idxCurrentSlide = 0;

function moveSlider() {
  let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
  sliderElm.style.marginLeft = -leftMargin + "px";
  console.log(sliderElm.clientWidth, leftMargin);
}
function moveLeft() {
  if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
  else idxCurrentSlide--;
  moveSlider();
}
function moveRight() {
  if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
  else idxCurrentSlide++;
  moveSlider();
}

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("resize", moveSlider);

//active button accoding
var button1 = document.getElementById("General");
var button2 = document.getElementById("Transactions");
var button3 = document.getElementById("Payment");
var button4 = document.getElementById("Returns");
var button5 = document.getElementById("Carrers");
var button6 = document.getElementById("Others");
function activateButton(event) {
  var target = event.target;
  var buttons = [button1, button2, button3, button4, button5, button6];
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button == target) {
      button.style.backgroundColor = "#605bfe";
      button.style.color = "white";
      button.style.padding = "20px";
    } else {
      button.style.backgroundColor = "white";
      button.style.color = "black";
      button.style.padding = "0px";
    }
  }
}
button1.addEventListener("click", activateButton);
button2.addEventListener("click", activateButton);
button3.addEventListener("click", activateButton);
button4.addEventListener("click", activateButton);
button5.addEventListener("click", activateButton);
button6.addEventListener("click", activateButton);
//Accoding
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  items.forEach((item) => {
    item.setAttribute("aria-expanded", "false");
  });

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
