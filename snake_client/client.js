const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // Prints a message once connection is established
  conn.on("connect", () => {
    console.log("Connected to server!");
  });
  // Gets data from the server and console logs it for the player
  conn.on("data", (data) => {
    console.log("Server Message:", data);
  });

  return conn;
};

// exporting connect function
module.exports = {
  connect
};