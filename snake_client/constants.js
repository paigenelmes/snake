//IP & Port
const IP = 'localhost';
const PORT = 50541;

//Movement keys
const moveUpKey = "w";
const moveLeftKey = "a";
const moveDownKey = "s";
const moveRightKey = "d";

//Close the game key
const closeKey = "\u0003";

//Messages object
const messagesObj = {
  "j": "Say: Hello there!",
  "k": "Say: See you later!",
  "i": "Say: Good game!",
  "l": "Say: Oh no!"
};

//Exporting constants
module.exports = {
  IP,
  PORT,
  moveUpKey,
  moveLeftKey,
  moveDownKey,
  moveRightKey,
  closeKey,
  messagesObj
};