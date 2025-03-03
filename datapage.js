// Tento skript zpracovává data z proměnné dataPage

console.log("Javascript byl načten");

// Kontrola, zda proměnná dataPage existuje
if (typeof dataPage !== 'undefined') {
    // Vypíše obsah proměnné dataPage do konzole
    console.log("Obsah dataPage: " + JSON.stringify(dataPage));
} else {
    console.error("Proměnná dataPage není definována!");
}
