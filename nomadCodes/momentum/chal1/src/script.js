import "src/styles.css";

const body = document.body;
const SMALL = "small";
const MEDIUM = "medium";
const LARGE = "large";
const widthlimitSmall = 600;
const widthlimitMedium = 800;
const widthlimitLarge = 1000;

let widthsize = window.innerWidth;
function changeColor() {
  widthsize = window.innerWidth;
  console.log(widthsize);
  if (widthsize < widthlimitSmall) {
    body.classList.toggle(SMALL);
  } else if (widthlimitSmall <= widthsize && widthsize < widthlimitMedium) {
    body.classList.toggle(MEDIUM);
  } else {
    body.classList.toggle(LARGE);
  }
}
window.addEventListener("resize", changeColor);
