var shellLogo = document.querySelector(".shell-logo");
var navToggle = document.querySelector(".shell-logo__button");
var menu = document.querySelector(".main-nav");

shellLogo.classList.remove("shell-logo--nojs");

navToggle.addEventListener("click", function() {
  if (shellLogo.classList.contains("shell-logo--closed")) {
    shellLogo.classList.remove("shell-logo--closed");
    menu.classList.remove("main-nav--disabled");
    shellLogo.classList.add("shell-logo--opened");
    shellLogo.classList.add("shell-logo--color");
  } else {
    shellLogo.classList.add("shell-logo--closed");
    menu.classList.add("main-nav--disabled");
    shellLogo.classList.remove("shell-logo--opened");
    shellLogo.classList.remove("shell-logo--color");
  }
});
