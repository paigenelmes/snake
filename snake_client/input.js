//Requirements
const { moveUpKey, moveDownKey, moveRightKey, moveLeftKey, closeKey, messagesObj } = require("./constants");

//Stores the active TCP connection object
let connection;

//Set Up Input function
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//Handle User Input function
const handleUserInput = function(input) {
  //Move up if moveUpKey is pressed
  if (input === moveUpKey) {
    connection.write("Move: up");
  }
  //Move left if moveLeftKey is pressed
  if (input === moveLeftKey) {
    connection.write("Move: left");
  }
  //Move down if moveDownKey is pressed
  if (input === moveDownKey) {
    connection.write("Move: down");
  }
  //Move right if moveRightKey is pressed
  if (input === moveRightKey) {
    connection.write("Move: right");
  }
  //Send a message by calling on the messages object
  if (messagesObj[input]) {
    connection.write(messagesObj[input]);
  }
  //Close the game after pressing control + c
  if (input === closeKey) {
    process.exit();
  }
};

//Exporting the set up input function
module.exports = {
  setupInput
};