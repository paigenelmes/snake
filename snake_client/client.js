const net = require("net");
const { IP, PORT } = require("./constants");


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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

// exporting the connect function
module.exports = {
  connect
};