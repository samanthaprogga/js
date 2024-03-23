'use strict';


function initializeSystemInfo() {
  function updateSystemInfo() {
    const os = navigator.platform || 'Unknown';
    const language = navigator.language || 'Unknown';
    const browser = navigator.userAgent || 'Unknown';

    document.querySelector('.os').textContent = `Operating System: ${os}`;
    document.querySelector('.language').textContent = `Language: ${language}`;
    document.querySelector('.browser').textContent = `Browser: ${browser}`;

// Update window information
    document.querySelector('.width').textContent = `Window Width: ${window.innerWidth}px`;
    document.querySelector('.height').textContent = `Window Height: ${window.innerHeight}px`;
    document.querySelector('.orientation').textContent = `Orientation: ${window.innerWidth > window.innerHeight ? 'Landscape' : 'Portrait'}`;
  }

function updateBatteryInfo() {
    const batteryLevelElement = document.querySelector('.battery-level');
    const batteryStatusElement = document.querySelector('.battery-status');

    if (navigator.getBattery) {
    navigator.getBattery().then(function (battery) {
      battery.onchargingchange = () => {
        if (battery.charging) {
          batteryStatusElement.textContent = 'Battery Status: Charging';
          } else {
          batteryStatusElement.textContent = 'Battery Status: Not Charging';
          }
   };

    const batteryLevel = Math.round(battery.level * 100);
    batteryLevelElement.textContent = `Battery Level: ${batteryLevel}%`;
        
// Set initial battery status
    if (battery.charging) {
      batteryStatusElement.textContent = 'Battery Status: Charging';
      } else {
      batteryStatusElement.textContent = 'Battery Status: Not Charging';
   }
   });
    } else {
      batteryLevelElement.textContent = 'Not Available';
      batteryStatusElement.textContent = 'Not A';
    }
   }

function updateOnlineStatus() {
    const networkStatusElement = document.querySelector('.network-status');
    
    if (navigator.onLine) {
      networkStatusElement.textContent = 'Online';
      networkStatusElement.className = 'network-status online';
    } else {
      networkStatusElement.textContent = 'Offline';
      networkStatusElement.className = 'network-status offline';
    }
  }

  updateSystemInfo();
  updateBatteryInfo();
  updateOnlineStatus();

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  window.addEventListener('load', updateSystemInfo);
  window.addEventListener('resize', updateSystemInfo);
 }

document.addEventListener('DOMContentLoaded', initializeSystemInfo);

