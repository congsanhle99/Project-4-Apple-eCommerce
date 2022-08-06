// slide show
const slidesshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");
    div.style.backgroundImage = `url(/assets/img/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add("change");

    document.querySelector(".slideshow").appendChild(div);
  }
};
slidesshowDivs();

let a = 1;

const divs = document.querySelectorAll(".slideshow div");
const slideShow = () => {
  setInterval(() => {
    a++;
    const div = document.querySelector(".slideshow .change");
    div.classList.remove("change");
    if (a < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      a = 1;
    }
  }, 10000);
};

slideShow();

// cube
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;
const cube = document.querySelector(".cube");

const playPause = () => {
  if (bool) {
    interval = setInterval(() => {
      cube.style.transform = `rotateY(${y++}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};
playPause();
// hover control don't auto rotate
document.querySelector(".controls").addEventListener("mouseover", () => {
  bool = false;
  playPause();
});
document.querySelector(".controls").addEventListener("mouseout", () => {
  bool = true;
  playPause();
});
// top
document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg) `;
});
// bottom
document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
//left
document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateY(${(y -= 20)}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
});
// right
document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateY(${(y += 20)}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
});
// top right
document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg) `;
});
// bottom left
document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg) `;
});
