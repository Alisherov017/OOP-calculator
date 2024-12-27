class Calculator {
  constructor(initialValue = 0) {
    this.result = initialValue;
  }

  add(value) {
    this.result += value;
    // Increment
  }

  subtract(value) {
    this.result -= value;
    // decrement
  }

  multiply(value) {
    this.result *= value;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("you !can divide it to 0 !");
    }
    this.result /= value;
  }

  reset() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
}

const calcInput = document.getElementById("calcInput");
console.log(calcInput, "calcInput ");

const buttons = document.querySelectorAll("button");
console.log(buttons, "buttons ");

let currentInput = "";
const calculator = new Calculator();

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      calculator.reset();
    } else if (value === "=") {
      try {
        const expression = currentInput.replace("÷", "/").replace("×", "*");
        console.log(expression, "expression");

        calculator.result = eval(expression);
        console.log(calculator.result, "calculator.result");

        currentInput = calculator.getResult();
      } catch {
        currentInput = "mistake bro";
      }
    } else {
      currentInput += value;
    }

    calcInput.value = currentInput || "0";
  });
});
