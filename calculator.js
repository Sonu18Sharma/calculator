var display = document.getElementById("input");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    var result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function handleKeyDown(event) {
  if (event.keyCode === 13) {
    calculate();
  }
}
