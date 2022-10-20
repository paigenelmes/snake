//ip & port
const IP = 'localhost';
const PORT = 50541;
//movement keys
const moveUpKey = "w";
const moveLeftKey = "a";
const moveDownKey = "s";
const moveRightKey = "d";
//close the game key
const closeKey = "\u0003";
//messages object
const messagesObj = {
  "j": "Say: Hello there!",
  "k": "Say: See you later!",
  "i": "Say: Good game!",
  "l": "Say: Oh no!"
};


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