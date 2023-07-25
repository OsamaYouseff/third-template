/////------------------------- /* Events counter down */  -------------------------

let eventsSec = document.getElementById("events");

let days = document.querySelector(".days .num");
let hours = document.querySelector(".hours .num");
let minutes = document.querySelector(".minutes .num");
let seconds = document.querySelector(".seconds .num");

///// getting  time unites

setInterval(() => {
  let dateTo2024 = new Date("1 Jan 2024 00:00:00 ").getTime();
  let dateNow = new Date().getTime();
  let timeDifference = dateTo2024 - dateNow;
  let noOfDays = timeDifference / (1000 * 60 * 60 * 24);
  let noOfHours = (noOfDays % 1) * 24;
  let noOfMinutes = (noOfHours % 1) * 60;
  let noOfSeconds = (noOfMinutes % 1) * 60;

  noOfDays = Math.trunc(noOfDays);
  noOfHours = Math.trunc(noOfHours);
  noOfMinutes = Math.trunc(noOfMinutes);
  noOfSeconds = Math.trunc(noOfSeconds);

  //// adding time unites to their container in DOM
  days.innerHTML = noOfDays < 10 ? `0${noOfDays}` : noOfDays;
  hours.innerHTML = noOfHours < 10 ? `0${noOfHours}` : noOfHours;
  minutes.innerHTML = noOfMinutes < 10 ? `0${noOfMinutes}` : noOfMinutes;
  seconds.innerHTML = noOfSeconds < 10 ? `0${noOfSeconds}` : noOfSeconds;
}, 1000);

/////------------------------- /* Events counter down */  -------------------------
/////------------------------- /* increase progress while scroll  */  -------------------------

let progSkills = document.querySelectorAll(".prog-skill");
let statsSec = document.getElementById("stats");
let ourSkillsSec = document.getElementById("our-skills");
let statsBox = document.querySelectorAll(".stats .box span");
let counterStatus = false;

function increaseNumber(ele) {
  let finalValue = ele.getAttribute("count");
  let counter = setInterval(() => {
    ele.innerHTML++;
    if (ele.innerHTML == finalValue) {
      clearInterval(counter);
    }
  }, 2000 / finalValue);
}

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= ourSkillsSec.offsetTop - 300) {
    progSkills.forEach((prog) => {
      let span = prog.children[1].children[0];
      span.setAttribute("style", `width:${prog.getAttribute("width")};`);
    });
  }
  if (window.scrollY >= statsSec.offsetTop - 400 && !counterStatus) {
    statsBox.forEach((span) => {
      increaseNumber(span);
    });
    counterStatus = true;
  }
});

/////------------------------- /* Events counter down */  -------------------------
/////------------------------- /* increase progress while scroll  */  -------------------------
