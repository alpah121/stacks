/*
time.js
calculate how many months have passed since last month variable
function called for every time time will pass
another function will pay out any payments from job and assets, plus take out any expenses
and another fucntion will pass a specified amount of time
*/
var countdown = 1248;
var lastMonth = 1248;

function subtractTime(hours)
{
//96 hours is a month
countdown -= hours;
let timePassed = lastMonth - countdown;
console.log(timePassed + " hours have passed");
if (timePassed/96 >= 1)
  {
  let months = Math.floor(timePassed/96);
  lastMonth -= months * 96;
  payday(months);
  }
}

function payday(multiplier)
{
console.log("yeah you get paid " + multiplier + " times!");
}

function passTime()
{
let amount = parseInt(document.getElementById("hoursToPass").value);
if (amount > 0)
  {
  subtractTime(amount);
  }
}

function monthsPassed(fromTime)
{
let timePassed = fromTime - countdown;
if (timePassed > 0)
  {
  return Math.floor(timePassed/96);
  }
else {return 0;}
}
