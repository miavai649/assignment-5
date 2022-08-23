function inputAmount(inputId){
  const inputField = document.getElementById(inputId);
  const inputNumberString = inputField.value;
  const inputNumber = parseFloat(inputNumberString);

  if (isNaN(inputNumber)) {
    alert("Please enter a number");
    return;
  } 
  else if (inputNumber < 0) {
    alert("Enter positive number");
    return;
  }

  return inputNumber;
}

function elementAmount (elementId){
  const elementField = document.getElementById(elementId);
  const elementNubmerString = elementField.innerText;
  const elementNubmer = parseFloat(elementNubmerString);
  return elementNubmer;
}

function setElementValue (elementId, curentValue){
  const elementPreviousValue = document.getElementById(elementId);
  elementPreviousValue.innerText = curentValue;
}