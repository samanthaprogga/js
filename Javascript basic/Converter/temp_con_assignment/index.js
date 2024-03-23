const form = document.getElementById("temperature-converter");
const temperatureInput = document.getElementById("temperature");
const convertButton = document.getElementById("convert-button");
const convertFrom = document.getElementById("convert-from");
const convertTo = document.getElementById("convert-to");
const resultInput = document.getElementById("result");

convertButton.addEventListener("click", function() {
  const temperature = parseFloat(temperatureInput.value);
  let result;

  if (convertFrom.textContent === "Fahrenheit") {
    result = (temperature - 32) * 5 / 9;
    convertTo.textContent = "to Fahrenheit";
    convertFrom.textContent = "Celsius";
  } else {
    result = (temperature * 9 / 5) + 32;
    convertTo.textContent = "to Celsius";
    convertFrom.textContent = "Fahrenheit";
  }

  resultInput.value = `${temperature}°${convertFrom.textContent} is ${result}°${convertTo.textContent}.`;
});