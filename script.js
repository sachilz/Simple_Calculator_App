const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      // Replace 'x' with '*' for evaluation and remove spaces
      let expression = display.innerText.replace(/x/g, '*').replace(/\s/g, '');
      display.innerText = eval(expression);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      // Check if the button is an operator (excluding clear, backspace, equal, and parentheses)
      const operators = ['+', '-', 'x', '/'];
      if (operators.includes(item.id)) {
        // Add spaces around operators
        display.innerText += ` ${item.id} `;
      } else {
        // For numbers and parentheses
        const currentText = display.innerText;
        const lastChar = currentText.slice(-1);
        
        // If the last character is an operator and we're adding a number, add a space first
        if (operators.includes(lastChar) && !isNaN(item.id)) {
          display.innerText += ` ${item.id}`;
        } else {
          display.innerText += item.id;
        }
      }
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
