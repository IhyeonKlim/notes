const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const button = document.querySelector("body button");
button.addEventListener("click", giveColor);

let ranNum1 =0;
let ranNum2 =0;
let flag = false;
function giveColor() {
  flag = true
    while (flag) {
      ranNum1 = Math.floor(Math.random() * colors.length);
      ranNum2 = Math.floor(Math.random() * colors.length);
      if(ranNum1 != ranNum2){
        flag = false;
      }      
    }
  const ranColor1 = colors[ranNum1];
  const ranColor2 = colors[ranNum2];
  document.body.style = `background : linear-gradient(${ranColor1},${ranColor2})`;
}
