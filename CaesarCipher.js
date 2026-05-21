const phrase = process.argv[2];
const shift = parseInt(process.argv[3]);

if (!phrase || isNaN(shift)) {
    console.log("Fehler: Bitte gib eine Phrase und eine Zahl ein!");
    process.exit(1);
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const lowerPhrase = phrase.toLowerCase();
let result = '';

for (let i = 0; i < lowerPhrase.length; i++) {
    const char = lowerPhrase[i];
    const index = alphabet.indexOf(char);

    if (index === -1) {
        result += char;
    } else {
        let newIndex = (index + shift) % 26;
        if (newIndex < 0) newIndex += 26; // Falls der Shift negativ war

        result += alphabet[newIndex];
    }
}

console.log(`Original:     ${phrase}`);
console.log(`Verschlüsselt: ${result}`);


//node CaesarCipher.js "WBS Kurs 2026!" 1
//Original:     WBS Kurs 2026!
//Verschlüsselt: xct lvst 2026!!