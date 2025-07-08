let val1 = "";
let val2 = "";
let operator = "";
let resultDisplayed = false;

function press(num) {
  const display = document.getElementById("inputBox");

  if (resultDisplayed) {
    display.textContent = num;
    resultDisplayed = false;
  } else {
    if (display.textContent === "0") {
      display.textContent = num;
    } else {
      display.textContent += num;
    }
  }
}

function clearDisplay() {
  document.getElementById("inputBox").textContent = "0";
  val1 = "";
  val2 = "";
  operator = "";
  resultDisplayed = false;
}

function setOperator(op) {
  val1 = document.getElementById("inputBox").textContent;
  operator = op;
  resultDisplayed = true;
}

function calculate() {
  if (!operator) return;

  val2 = document.getElementById("inputBox").textContent;
  let result = 0;

  switch (operator) {
    case "+":
      result = parseFloat(val1) + parseFloat(val2);
      break;
    case "-":
      result = parseFloat(val1) - parseFloat(val2);
      break;
    case "*":
      result = parseFloat(val1) * parseFloat(val2);
      break;
    case "/":
      result = parseFloat(val1) / parseFloat(val2);
      break;
  }

  document.getElementById("inputBox").textContent = result;
  resultDisplayed = true;
  operator = "";
}
