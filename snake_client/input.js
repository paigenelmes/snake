const { moveUpKey, moveDownKey, moveRightKey, moveLeftKey, closeKey, messagesObj } = require("./constants");

// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(input) {
  //Move up
  if (input === moveUpKey) {
    connection.write("Move: up");
  }
  //Move left
  if (input === moveLeftKey) {
    connection.write("Move: left");
  }
  //Move down
  if (input === moveDownKey) {
    connection.write("Move: down");
  }
  //Move right
  if (input === moveRightKey) {
    connection.write("Move: right");
  }
  //Send a message by calling on the messages object
  if (messagesObj[input]) {
    connection.write(messagesObj[input]);
  }
  //close the game after pressing control + c
  if (input === closeKey) {
    process.exit();
  }
};

//exporting the set up input function

module.exports = {
  setupInput
};