const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // Prints a sucess message once connection is established & sends the name
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: PEN");
  });

  // Gets data from the server and console logs it for the player
  conn.on("data", (data) => {
    console.log("Server Message:", data);
  });

  return conn;
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //close the game if the user presses control + c
  const handleUserInput = function(input) {
    if (input === '\u0003') {
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

// exporting the connect, set up input, and user input functions
module.exports = {
  connect,
  setupInput
};