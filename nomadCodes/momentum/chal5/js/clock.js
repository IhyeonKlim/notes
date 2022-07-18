const body = document.body;
const clock = document.querySelector("#clocks")
const dates = document.querySelector("#dates")
const months =[];
for(let i = 0; i<12; i++){
    months.push(i+1);
}

function getClock(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthString = months[month]
    const day = date.getDate();
    let hour = date.getHours()
    const pm = "오후";
    if (hour > 12){
        hour = hour - 12;
    }else{
        pm = "오전"
    }
    hour = String(hour).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    dates.innerText = `${year}년 ${monthString}월 ${day}일 `
    clock.innerText = `${pm} ${hour} : ${minute} : ${second}`;
}

getClock();
setInterval(getClock, 1000);
