const clockTitle = document.querySelector(".js-clock");

// const cristmas = new Date("2022-12-24 00:00:00");
// const DAY_COUNT = 1000 * 60 * 60 * 24;
// const HOUR_COUNT = 1000 * 60 * 60;
// const MINUTE_COUNT = 1000 * 60;
// const SECOND_COUNT = 1000;

// function getClock() {
//   const now = new Date();
//   const remain = cristmas - now;
//   const d = Math.floor(remain / DAY_COUNT);
//   const h = Math.floor((remain % DAY_COUNT) / HOUR_COUNT);
//   const m = Math.floor((remain % HOUR_COUNT) / MINUTE_COUNT);
//   const s = Math.floor((remain % MINUTE_COUNT) / SECOND_COUNT);
//   const days = String(d).padStart(2, "0");
//   const hour = String(h).padStart(2, "0");
//   const minute = String(m).padStart(2, "0");
//   const seconds = String(s).padStart(2, "0");

//   clockTitle.innerText = `${days}d ${hour}h ${minute}m ${seconds}s`;
// }

// getClock();
// setInterval(getClock, 1000);


//sol
const xmas = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);

function getTime() {
  const now = new Date();

  const difference = new Date(xmas - now);
  const secondsInMs = Math.floor(difference/1000)
  const minutesInMs = Math.floor(secondsInMs/60)
  const hoursInMs = Math.floor(minutesInMs/60)
  const days = Math.floor(hoursInMs/24)

  const seconds = secondsInMs % 60
  const minutes = minutesInMs % 60
  const hours = hoursInMs % 24

  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;

  clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`
}
getTime()
setInterval(getTime, 1000);
