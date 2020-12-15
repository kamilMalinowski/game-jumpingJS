//GAME-JUMP ('notatki-js.html') - WORK IN PROGRESS
// 1.
// 2.
// 3.
// 4.
// 5.
// 6.
// 7.
// 8.
// 9.
// 10.

const play = document.querySelector(".play--js");
const jump = document.querySelector(".jump--js");

const sprite = document.querySelector(".sprite--js");
const js = document.querySelector(".js--js");

const score = document.querySelector(".score--js");

//buttons
//1. play

let isOff = false;
play.addEventListener("click", () => {
  const area = document.querySelector(".area--js");
  if (isOff) {
    area.style.display = "none";
    isOff = false;
  } else {
    setTimeout(() => {
      area.style.display = "block";
      isOff = true;
    }, 800);
  }
});

//2. jump
jump.addEventListener("click", (e) => {
  if (e) {
    sprite.classList.add("animation");
    score.innerHTML++;
  }

  setTimeout(() => {
    sprite.classList.remove("animation");

  }, 400);
});

const gameOver = setInterval(() => {
  let spriteTop = parseInt(
    window.getComputedStyle(sprite).getPropertyValue("top")
  );
  let jsLeft = parseInt(window.getComputedStyle(js).getPropertyValue("left"));
  if (jsLeft < 25 && jsLeft > -25 && spriteTop >= 135) {
    js.style.animation = "none";
    js.style.left = "50px";
  }
}, 10);
