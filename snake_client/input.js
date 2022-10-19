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
  //Write 'Move: up' when w is pressed
  if (input === "w") {
    connection.write("Move: up");
  }
  //Write 'Move: left' when a is pressed
  if (input === "a") {
    connection.write("Move: left");
  }
  //Write 'Move: down' when s is pressed
  if (input === "s") {
    connection.write("Move: down");
  }
  //Write 'Move: right' when d is pressed
  if (input === "d") {
    connection.write("Move: right");
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