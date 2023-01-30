// Datenquelle: lokales Array
const data = [
  { name: 'Basel', temp: 7 },
  { name: 'Barcelona', temp: 17 },
  { name: 'Freiburg', temp: 4 },
  { name: 'Lörrach', temp: 6 },
  { name: 'Sydney', temp: 21 },
];

function loadData() {
  data.forEach((elem) => createNewLocation(elem.name));
}

// Referenzen auf HTML-Elemente
const weatherTiles = document.getElementById('weather_tiles');
const searchInput = document.getElementById('search_input');
const searchButton = document.getElementById('search_button');
const locationSelect = document.getElementById('location_select');
const locationButton = document.getElementById('location_button');

// Hilfsfunktion: liefert HTML für Wetterorte
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

// Funktionen für Verhalten
function createNewLocation(location) {
  // Neues Element erstellen (<div></div>)
  const newElement = document.createElement('div');
  // Inhalt des neuen Elementes setzen <div>location</div>
  newElement.innerHTML = getWeatherLocationHTML(location);
  // Neues Element als Kind an weatherTiles einfügen
  weatherTiles.appendChild(newElement);
}

// Event-Handler (z.B. click) an HTML-Elemente binden
searchButton.addEventListener('click', () =>
  createNewLocation(searchInput.value)
);
locationButton.addEventListener('click', () =>
  createNewLocation(locationSelect.value)
);

loadData();
