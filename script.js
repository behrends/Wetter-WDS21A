// 1. Schritt: Button "TEST" referenzieren
const weatherTiles = document.getElementById('weather_tiles');
const searchInput = document.getElementById('search_input');
const searchButton = document.getElementById('search_button');

// HTML der Wetterorte:
function getWeatherLocationHTML(location) {
  return `<div class="weather_location">
  <div class="place">${location}</div>
  <div class="weather_info">
    <span>
      <span class="temp">7°</span>
      <span class="cond">zunehmend bewölkt</span>
    </span>
    <img src="./sun-cloudy-line.svg" alt="bewölkt" />
  </div>
</div>`;
}

// 2. Schritt: Verhalten des Buttons definieren:
// TODO Klick auf Button "TEST" erzeugt Element (Wetterort)
function createNewLocation() {
  // Neues Element erstellen (<div></div>)
  const newElement = document.createElement('div');
  // Inhalt des neuen Elementes setzen <div>ORT</div>
  const location = searchInput.value;
  newElement.innerHTML = getWeatherLocationHTML(location);
  // Neues Element als Kind an weatherTiles einfügen
  weatherTiles.appendChild(newElement);
}

// 3. Schritt: Event-Handler (click) anbinden
// "Funktion an den Button namens Test hängen"
// () => alert('OK') --> function() {alert('ok')}
searchButton.addEventListener('click', createNewLocation);
