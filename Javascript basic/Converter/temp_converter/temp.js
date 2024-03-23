const form = document.getElementById("temperature-converter");
const temperatureInput = document.getElementById("temperature");
const convertFromSelect = document.getElementById("convert-from");
const convertToSelect = document.getElementById("convert-to");
const resultParagraph = document.getElementById("result");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const temperature = parseFloat(temperatureInput.value);
  const convertFrom = convertFromSelect.value;
  const convertTo = convertToSelect.value;

  let result;

  if (convertFrom === "fahrenheit") {
    if (convertTo === "fahrenheit") {
      result = temperature;
    } else {
      result = (temperature - 32) * 5 / 9;
    }
  } else {
    if (convertTo === "fahrenheit") {
      result = (temperature * 9 / 5) + 32;
    } else {
      result = temperature;
    }
  }

  resultParagraph.textContent = `${temperature}°${convertFrom} is ${result}°${convertTo}.`;
});