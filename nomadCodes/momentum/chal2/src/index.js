const playBtn = document.querySelector("#play");
playBtn.addEventListener("click", gussNumberPlay);

let LITMIT_NUM = document.querySelector("#inputNumber").value;
defSetting(LITMIT_NUM);

function defSetting(LITMIT_NUM) {
  if (LITMIT_NUM <= 0 || LITMIT_NUM === "") {
    LITMIT_NUM = 10;
    document.querySelector("#inputNumber").value = 10;
  }
}

function gussNumberPlay() {
  LITMIT_NUM = document.querySelector("#inputNumber").value;
  defSetting(LITMIT_NUM);
  if (LITMIT_NUM <= 0) {
    alert("Please choose a limit number");
    return;
  }
  const guess = document.querySelector("#guessNumber");

  const GENNUM = Math.round(Math.random() * LITMIT_NUM);
  let GUESSNUM = guess.value;

  if (GUESSNUM < 0 || GUESSNUM === "") {
    GUESSNUM = 0;
    guess.value = 0;
    alert("Please choose a right number");
    return;
  } else if (parseInt(GUESSNUM) > parseInt(LITMIT_NUM)) {
    const info = `Please choose a number less then ${LITMIT_NUM}`;
    alert(info);
    return;
  }

  const result = `You chose: ${GUESSNUM}, the machine chose:${GENNUM}`;
  if (parseInt(GUESSNUM) === parseInt(GENNUM)) {
    document.querySelector("#whoWon").innerHTML = "You win!";
  } else {
    document.querySelector("#whoWon").innerHTML = "You lost!";
  }
  document.querySelector("#result").innerHTML = result;
}
