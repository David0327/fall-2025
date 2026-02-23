$("#die").on("click", handleClick);{
  // Your code goes here
$("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 50)
  .css("left", 50)
  .appendTo("#die");
};
function rollDie(dieId) {
  var randomNum = Math.ceil(Math.random() * 6);
console.log(randomNum);;
}

function handleClick() {
  rollDie("#die");
}

// TEST ONLY (remove in TODO 5)
handleClick();
