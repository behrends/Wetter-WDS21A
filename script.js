console.log('Hallo, Wetter!');

function firstFunction() {
  alert('TODO: Suche ausführen');
}

// Referenz auf den Button mit der id
// "search_button" herstellen
const searchButton = document.getElementById('search_button');
// Binde Funktion firstFunction an den
// Button mit der id "search_button"
searchButton.addEventListener('click', firstFunction);
