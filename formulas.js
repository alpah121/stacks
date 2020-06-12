/*
all formulas go here including
monthly interest - m = apr/12
equity - e = down payment + principal paid + appreciation
mortgage payment - P = L[c(1 + c)n]/[(1 + c)n - 1]
mortgage balance - B = L[(1 + c)n - (1 + c)p]/[(1 + c)n - 1]
rental income
principal payment - payment - (loanAmount * i/12)
let price = 100000;
let payment = Math.floor(mortgagePayment(price - 10800, 30, .07));
let amortization = amortizationSchedule(payment, 100000 - 10800, .07);
*/

function amortizationSchedule(payment, loanAmount, apr)
{
//return payment - (loanAmount * (apr/12));
var leftover = loanAmount;
var schedule = [];
for (i =0; i < 61; i++)
  {
  let interest = leftover * (apr/12);
  let principal = payment - interest;

  schedule.push({"interest" : interest, "principal" : principal, "leftover" : leftover});
  leftover -= principal;
  }
return schedule;
}

function mortgagePayment(loan, years, apr)
{
let n = years * 12;
let c = apr/12;
let p1 = c * Math.pow(1 + c, n);
let p2 = Math.pow(1 + c, n) - 1;
return loan * (p1/p2);
}

function appreciation(price, yearlyRate, months)
{
let monthlyRate = yearlyRate/12;
return price * (1 + (monthlyRate * months));  
}
