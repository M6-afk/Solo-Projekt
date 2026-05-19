// process.argv[2] gibt die ausgabe nachdem node rockpaerscissors2.js
const playerMove = process.argv[2];

// richtige Eingabe überprüfen!
if (!playerMove || (playerMove !== 'rock' && playerMove !== 'paper' && playerMove !== 'scissors')) {
    console.log("Fehler: Bitte gib 'rock', 'paper' oder 'scissors' ein!");
    console.log("Beispiel: node rockPaperScissors2.js rock");
    process.exit(1); // Beendet das Programm sofort
}


// generierung der Computer-Auswahl
const moves = ['rock', 'paper', 'scissors'];
const randomIndex = Math.floor(Math.random() * moves.length);
const computerMove = moves[randomIndex];

console.log(`Du hast gewählt: ${playerMove}`);
console.log(`Der Computer wählte: ${computerMove}`);


// 3. GEWINNER ERMITTELN (Ausführlich mit if / else Statements)
// Fall 1: Unentschieden
if (playerMove === computerMove) {
    console.log("Ergebnis: Unentschieden! 🤝");
}
// Fall 2: Ich Gewinne
else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
) {
    console.log("Ergebnis: Du gewinnst! 🎉");
}
// Fall 3: sollten die vairanten von oben nicht kommen habe ich automatisch verloren!
else {
    console.log("Ergebnis: Computer gewinnt! 🤖 (Du hast verloren)");
}