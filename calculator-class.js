export default class Calculator {
  constructor() {
    (this.PI = 3.141592653589793), (this.E = 2.718281828459045);
  }
  //getter
  get pi() {
    return `PI (${this.PI})`;
  }
  get e() {
    return `E (${this.E})`;
  }

  //methods
  ratio(x, y, width) {
    const ratio = x / y;
    return `height is ${width / ratio} on ratio ${x}:${y}`;
  }
  percentage(x, y) {
    return `${(x / y) * 100}%`;
  }
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return y - x;
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    if (y === 0) return `y(the divisor) should be more than 0`;
    return x / y;
  }
  modulation(x, y) {
    if (y === 0) return `y(the divisor) should be more than 0`;
    return x % y;
  }
  elevate(x, y) {
    return x ** y;
  }
  sqrt(x) {
    return x ** 0.5;
  }
}
const calculator = new Calculator();

//CALCULATOR

const clearBtn = document.getElementById("clearBtn");
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".numericButton");
const deleteButton = document.getElementById("btn-delete");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalButton = document.getElementById("eql-btn");
let firstOperand = "";
let secondOperand = "";
let operator = "";

clearBtn.onclick = function () {
  firstOperand = "";
  screen.textContent = firstOperand;
};

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    firstOperand = firstOperand.concat(button.textContent.trim());
    screen.textContent = firstOperand;
  });
});

deleteButton.addEventListener("click", (evt) => {
  firstOperand = firstOperand.split("").slice(0, -1).join("");
  screen.textContent = firstOperand;
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    secondOperand = firstOperand;
    firstOperand = "";
    operator = button.textContent;
    screen.textContent = firstOperand;
  });
});

equalButton.addEventListener("click", (evt) => {
  const firstOperandFloat = parseFloat(firstOperand);
  const secondOperandFloat = parseFloat(secondOperand);
  switch (operator) {
    case "/":
      screen.textContent = calculator.divide(
        secondOperandFloat,
        firstOperandFloat
      );
      //   screen.textContent = `${parseFloat(secondOperand) / parseFloat(firstOperand)}`
      break;

    case "*":
      screen.textContent = calculator.multiply(
        secondOperandFloat,
        firstOperandFloat
      );
      //   screen.textContent = `${parseFloat(secondOperand) * parseFloat(firstOperand)}`
      break;

    case "-":
      screen.textContent = calculator.subtract(
        secondOperandFloat,
        firstOperandFloat
      );
      //   screen.textContent = `${parseFloat(secondOperand) - parseFloat(firstOperand)}`
      break;

    case "+":
      screen.textContent = calculator.add(
        secondOperandFloat,
        firstOperandFloat
      );
      //   screen.textContent = `${parseFloat(secondOperand) + parseFloat(firstOperand)}`
      break;
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    switch (operator) {
      case "/":
        screen.textContent = `${
          parseFloat(secondOperand) / parseFloat(firstOperand)
        }`;
        break;

      case "*":
        screen.textContent = `${
          parseFloat(secondOperand) * parseFloat(firstOperand)
        }`;
        break;

      case "-":
        screen.textContent = `${
          parseFloat(secondOperand) - parseFloat(firstOperand)
        }`;
        break;

      case "+":
        screen.textContent = `${
          parseFloat(secondOperand) + parseFloat(firstOperand)
        }`;
        break;
    }
  }
});
