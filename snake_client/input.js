const { connect } = require("http2");

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
  //Move up when w is pressed
  if (input === "w") {
    connection.write("Move: up");
  }
  //Move left when a is pressed
  if (input === "a") {
    connection.write("Move: left");
  }
  //Move down when s is pressed
  if (input === "s") {
    connection.write("Move: down");
  }
  //Move right when d is pressed
  if (input === "d") {
    connection.write("Move: right");
  }
  //Say hello when j is pressed
  if (input === "j") {
    connection.write("Say: Hello there!");
  }
  //Say goodbye when k is pressed
  if (input === "k") {
    connection.write("Say: See you later!");
  }
  //Say good job when i is pressed
  if (input === "i") {
    connection.write("Say: Good job!");
  }
  //Say oh no when i is pressed
  if (input === "l") {
    connection.write("Say: Oh no!");
  }
  //close the game if the user presses control + c
  if (input === '\u0003') {
    process.exit();
  }
};


//exporting the set up input function

module.exports = {
  setupInput
};