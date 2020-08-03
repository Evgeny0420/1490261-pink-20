var openmenu = document.querySelector(".shell-logo__button-burger");
var menu = document.querySelector(".main-nav");
var closemenu = document.querySelector(".shell-logo__button-close");
var strip = document.querySelector(".shell-logo");


openmenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("main-nav--disabled");
  openmenu.classList.add("shell-logo__button-burger--none");
  closemenu.classList.remove("shell-logo__button-close--none");
  strip.classList.add("shell-logo--color");
});

closemenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.add("main-nav--disabled");
  openmenu.classList.remove("shell-logo__button-burger--none");
  closemenu.classList.add("shell-logo__button-close--none");
  strip.classList.remove("shell-logo--color");
});
