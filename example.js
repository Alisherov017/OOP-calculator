const calcInput = document.getElementById("calcInput");
const buttons = document.querySelectorAll("button");

let currentInput = ""; // Текущее значение в строке

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      // Очистить строку
      currentInput = "";
    } else if (value === "=") {
      // Вычислить результат
      try {
        currentInput = eval(currentInput.replace("÷", "/").replace("×", "*"));
      } catch {
        currentInput = "Ошибка";
      }
    } else {
      // Добавить символ к строке
      currentInput += value;
    }

    // Обновить поле ввода
    calcInput.value = currentInput || "0";
  });
});
