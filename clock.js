let second = document.querySelector("#second");
let minute = document.querySelector("#minute");
let hour = document.querySelector("#hour");
let digitalClock = document.querySelector("#digitalClock");

function SetClock() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hourDeg = hh * 30 + mm * 0.5;
  let minuteDeg = mm * 6 + ss * 0.1;
  let secondDeg = ss * 6;
  hour.style.transform = `rotateZ(${hourDeg}deg)`;
  minute.style.transform = `rotateZ(${minuteDeg}deg)`;
  second.style.transform = `rotateZ(${secondDeg}deg)`;
  digitalClock.innerHTML = `${hh % 12} : ${mm} : ${hh > 12 ? "PM" : "AM"}`;
}
setInterval(SetClock, 1000);
SetClock();

