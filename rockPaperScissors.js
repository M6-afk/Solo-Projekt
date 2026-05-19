const choices = ['rock', 'paper', 'scissors'];

// spielerauswahl
const playerChoice = process.argv[2];

// zufällige Auswahl des Computers
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

// Ergebnis berechnen
function getResult(player, computer) {
    if (player === computer) {
        return 'Draw!';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    }
    return 'You lose!';
}

const result = getResult(playerChoice, computerChoice);
console.log(`You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`);