function firstFunction() {
  alert('TODO: Suche ausführen');
}

function createNewLocation() {
  // 3. Schritt: Neues Element erstellen (<div></div>)
  const newElement = document.createElement('div');
  // 4. Schritt: Inhalt des neuen Elementes setzen
  // <div>Hamburg</div>
  newElement.innerHTML = 'Hamburg';
  // 5. Schritt: Neues Element ins DOM einhängen
  // a) Element (<div id="weather_tiles">) für die
  // Wetterorte referenzieren
  const weatherTiles = document.getElementById('weather_tiles');
  // b) Neues Element als Kind an weatherTiles einfügen
  weatherTiles.appendChild(newElement);
}

// Referenz auf den Button mit der id
// "search_button" herstellen
const searchButton = document.getElementById('search_button');
// Binde Funktion firstFunction an den
// Button mit der id "search_button"
searchButton.addEventListener('click', firstFunction);

// TODO: Klick auf Button "TEST" erzeugt Element
// 1. Schritt: Button "TEST" referenzieren
const btn = document.getElementById('test');
// 2. Schritt: Event-Handler (click) anbinden
// "Funktion an den Button namens Test hängen"
// () => alert('OK') --> function() {alert('ok')}
btn.addEventListener('click', createNewLocation);
