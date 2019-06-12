var target, guessInput;
var finished = false;
var element;
guesses = 0;
var colors = [
  "beige", 
  "black", 
  "blue" , 
  "cyan" , 
  "gold", 
  "gray", 
  "green", 
  "magenta", 
  "orange", 
  "red", 
  "white", 
  "yellow"
];

function do_game() {
  var randomColor = Math.random() * 10;
  var randomColorInteger = Math.floor(randomColor);
  target = colors[randomColorInteger];
  alert("The answer is: " + target);

  while (!finished) {
  guessInput = prompt("I am thinking of one of these colors:\n\n" +  
    "beige, black, blue, cyan, gold, gray, green, magenta, orange, red, white, or yellow\n\n" + 
    "What color am I thinking of?" 
  );
  guesses++;
  finished = check_guess();
  }

  function check_guess() {
    if (colors.indexOf(guessInput) === -1 ) {
      alert("Sorry, I don't recognize your color.\n\n" + "Please try again.");
      return false;
    } else if (guessInput > target) {
      alert("Sorry, your guess is not correct!\n\n" + "Hint: Your input is alphabetically higher than mine!\n\n" + "Please try again.")
      return false;
    } else if (guessInput < target) {
      alert("Sorry, your guess is not correct!\n\n" + "Hint: your input is alphabetically lower than mine!\n\n" + "Please try again.")
      return false;
    }
    document.body.style.backgroundColor = String(target);
    alert("You are right! The color was " + target + ".\n\nYou took " + guesses + " guess(es)!");
    return true;
  }
}
