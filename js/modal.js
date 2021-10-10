const btnSurprise = document.querySelector(".surprise");
const shadowSurprise = document.querySelector(".shadowSurprise");
const closeApplicationSent = document.querySelectorAll(".closeApplicationSent");
const buttonSurpris = document.querySelector(".buttonSurpris");
const submitYourApplication = document.querySelector(".shadow");
const body = document.querySelector('body');
const shadowThank = document.querySelector('.shadowThank');
fadeOut(shadowSurprise)

buttonSurpris.addEventListener("click", () => {
  fadeOut(shadowSurprise);
  fadeIn(submitYourApplication);
});

closeApplicationSent.forEach((x) => {
  x.addEventListener("click", () => {
    fadeOut(shadowSurprise);
    fadeOut(shadowThank);
    hiddenNone(body)
  });
});

btnSurprise.addEventListener("click", () => {
  fadeIn(shadowSurprise);
  hidden(body)
});

function fadeIn(el) {
  el.style.display = "block";
}

function fadeOut(el) {
  el.style.display = "none";
}
function hidden(el) {
  el.style.overflow = 'hidden';
}

function hiddenNone(el) {
  el.style.overflow = ''
}