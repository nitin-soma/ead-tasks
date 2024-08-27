const display = document.getElementById("display");
const keys = document.querySelectorAll(".keys button");

let calculation = "";

keys.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;
    switch (value) {
      case "C":
        calculation = "";
        display.value = "";
        break;
      case "←":
        calculation = calculation.slice(0, -1);
        display.value = calculation;
        break;
      case "=":
        try {
          const result = eval(calculation);
          display.value = result;
          calculation = result;
        } catch (error) {
          display.value = "Error";
        }
        break;
      default:
        calculation += value;
        display.value = calculation;
    }
  });
});
