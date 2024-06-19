let counter = document.getElementById("count");
let dec = document.getElementById("Decrement");
let inc = document.getElementById("Increment");
let clean = document.getElementById("clear");
function increase() {
  let countervalue = Number(counter.textContent);
  countervalue = countervalue + 1;
  counter.textContent = countervalue;
  if (countervalue > 0) {
    document.getElementById("Decrement").disabled = false;
    document.getElementById("error").style.display = "none";
    document.getElementById("clear").style.display = "inline";
  }
}
function decrease() {
  let countervalue = Number(counter.textContent);
  countervalue = countervalue - 1;
  counter.textContent = countervalue;
  if (countervalue == 0) {
    document.getElementById("error").style.display = "block";
    document.getElementById("clear").style.display = "none";
    document.getElementById("Decrement").disabled = true;
  }
}
function clearing() {
  let countervalue = Number(counter.textContent);
  countervalue = 0;
  counter.textContent = countervalue;
  if (countervalue == 0) {
    document.getElementById("error").style.display = "block";
    document.getElementById("clear").style.display = "none";
    document.getElementById("Decrement").disabled = true;
  }
}
