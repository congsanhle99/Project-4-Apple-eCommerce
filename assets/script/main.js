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

// loading animation
const section3Content = document.querySelector(".section-3-content");
window.addEventListener("scroll", () => {
  if (window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
    section3Content.classList.add("change");
  }
});

//

document.querySelectorAll(".watch-control, .controls a").forEach((control) => {
  control.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");
const watchTopControl = document.querySelector(".watch-top-control");
const watchRightControl = document.querySelector(".watch-right-control");
const watchBottomControl = document.querySelector(".watch-bottom-control");
const watchLeftControl = document.querySelector(".watch-left-control");

let axisX = 0;
let axisY = 0;

const hideControl = () => {
  if (axisY === -280) {
    watchTopControl.classList.add("hideControl");
  } else {
    watchTopControl.classList.remove("hideControl");
  }
  if (axisY === 280) {
    watchBottomControl.classList.add("hideControl");
  } else {
    watchBottomControl.classList.remove("hideControl");
  }
  if (axisX === 280) {
    watchRightControl.classList.add("hideControl");
  } else {
    watchRightControl.classList.remove("hideControl");
  }
  if (axisX === -280) {
    watchLeftControl.classList.add("hideControl");
  } else {
    watchLeftControl.classList.remove("hideControl");
  }
};

watchTopControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY -= 70)}rem`;
  hideControl();
});
watchBottomControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY += 70)}rem`;
  hideControl();
});
watchRightControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX += 70)}rem`;
  hideControl();
});
watchLeftControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX -= 70)}rem`;
  hideControl();
});
