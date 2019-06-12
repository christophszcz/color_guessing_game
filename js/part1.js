var target, guessInput;
var finished = false;
var colors = [
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
  var randomColor =Math.random() * 10;
  var randomColorInteger = Math.floor(randomColor);
  target = colors[randomColorInteger];
  alert("The answer is: " + target);

  while (!finished) {
    var promptText = "I am thinking of one of these colors:\n\n" +  
      "blue, cyan, gold, gray, green, magenta, orange, red, white, or yellow\n\n" +
      "What color am I thinking of?";
    guessInput = prompt(promptText);
    finished = target === guessInput;
  }
}
