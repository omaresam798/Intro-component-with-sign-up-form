let photo = document.querySelector(".photo");
let font = document.querySelector(".title");
let inputs = document.querySelectorAll(".inp");
let submit = document.querySelector(".submit");
let back = document.querySelector(".back");
let left = document.querySelector(".left");
if (window.innerWidth <= 567) {
  photo.setAttribute("src", "images/bg-intro-mobile.png");
  font.style.fontSize = "35px";
  left.style.marginTop = "400px";
} else {
  photo.setAttribute("src", "images/bg-intro-desktop.png");
  font.style.fontSize = "60px";
}
window.onresize = () => {
  if (window.innerWidth <= 567) {
    photo.setAttribute("src", "images/bg-intro-mobile.png");
    font.style.fontSize = "35px";
    left.style.marginTop = "400px";
  } else {
    photo.setAttribute("src", "images/bg-intro-desktop.png");
    font.style.fontSize = "60px";
    left.style.marginTop = "0";
  }
};

submit.onclick = function () {
  let all = 0;
  inputs.forEach((item) => {
    if (item.value === "") {
      item.nextElementSibling.textContent =
        item.getAttribute("aria-errormessage");
      all++;
    } else {
      item.nextElementSibling.textContent = "";
    }
  });

  if (all === 0) {
    inputs.forEach((e) => {
      e.value = "";
    });
  }
};
