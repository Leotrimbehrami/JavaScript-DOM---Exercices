function randomNum() {
  return Math.floor(Math.random() * 10) + 1 ;
}

function guessingGame(){
  // Setze den Zählvariable für die Versuche auf 3
  let counter = 3;
  const secretNum = randomNum();

  // Schleife für die 3 versuche
  while (counter > 0) {
    const guess = prompt("Rate eine Zahl zwischen 1 und 10! Du hast noch " + counter + " Versuche.");

    // Überprüfe ob die Eingabe eine Zahl zwischen 1-10 ist
    if(isNaN(guess) || guess < 1 || guess > 10) {
      alert("Bitte gib eine Zahl zwischen 1 und 10 ein.");
      continue;
    }

    // Vergleiche die Eingabe mit der Zufalszahl
    if ( guess === secretNum) {
      alert("Du hast gewonnen");
      return
    } else {
      alert("Falsche Antwort");
      counter--
    }
  }
  alert("Du hast alle Versuche aufgebraucht. Die gesuchte Zahl war " + secretNum + ".")
}

guessingGame()