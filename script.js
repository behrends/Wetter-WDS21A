// 1. Schritt: Button "TEST" referenzieren
const btn = document.getElementById('test');
const weatherTiles = document.getElementById('weather_tiles');

// 2. Schritt: Verhalten des Buttons definieren:
// TODO Klick auf Button "TEST" erzeugt Element (Wetterort)
function createNewLocation() {
  // Neues Element erstellen (<div></div>)
  const newElement = document.createElement('div');
  // Inhalt des neuen Elementes setzen <div>Hamburg</div>
  newElement.innerHTML = 'Hamburg';
  // Neues Element als Kind an weatherTiles einfügen
  weatherTiles.appendChild(newElement);
}

// 3. Schritt: Event-Handler (click) anbinden
// "Funktion an den Button namens Test hängen"
// () => alert('OK') --> function() {alert('ok')}
btn.addEventListener('click', createNewLocation);
