// script.js

const celsius = document.getElementById('to-celsius');
const fahrenheit = document.getElementById('to-fahrenheit');
const temperatureInput = document.getElementById('temperature-input');
const convertBtn = document.querySelector('#convert');
const resultDiv = document.getElementById('result-box');


convertBtn.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);

  if (isNaN(temperature)) {
    resultDiv.innerText = 'Please enter a valid number.';
    return;
  }

  
if (fahrenheit.checked) {
  // Convert Fahrenheit to Celsius
  const fahrenheit = (temperature * (9 / 5)) + 32;
  resultDiv.innerText = `${temperature}°C is ${fahrenheit.toFixed(1)}°F`;
} else if (celsius.checked) {
  // Convert Celsius to Fahrenheit
  const celsius = (temperature - 32) * (5 / 9);
  resultDiv.innerText = `${temperature}°F is ${celsius.toFixed(1)}°C`;
}
});



const themeSwitcher = document.getElementById('themeSwitcher');



themeSwitcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    themeSwitcher.textContent = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
});
const button = document.querySelector('[data-theme-toggle]');
const html = document.documentElement;

// Set the initial theme based on the user's system settings
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  html.setAttribute('data-theme', 'dark');
}

// button.addEventListener('click', function() {
//   const currentTheme = getComputedStyle(html).getPropertyValue('data-theme');
//   html.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
// });

