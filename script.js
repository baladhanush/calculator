let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function toggleSign() {
  if (displayValue !== '') {
    if (displayValue[0] === '-') {
      displayValue = displayValue.slice(1);
    } else {
      displayValue = '-' + displayValue;
    }
    document.getElementById('display').value = displayValue;
  }
}

function appendPercentage() {
  if (displayValue !== '') {
    displayValue = eval(displayValue) / 100;
    document.getElementById('display').value = displayValue;
  }
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
