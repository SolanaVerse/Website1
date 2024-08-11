let timeout;

function playYes() {
  timeout = setTimeout(alertFunc, 29000);
  var audio = new Audio("desiigner_panda.mp3");
  var music = new Audio("The Color Violet.mp3");
  audio.play();
  // music.play();
}

function alertFunc() {
  var music = new Audio("The Color Violet.mp3");
  music.play();
}

function playNo() {
 
  var music = new Audio("The Color Violet.mp3");
  
  music.play();
}

function playExit() {
  var audio = new Audio("The Color Violet.mp3");
  audio.play();
}
