//Requirements
const { connect } = require("../snake_client/client");
const { setupInput } = require("../snake_client/input");

//Log a message while connecting to server
console.log("Connecting ...");

//Connection variable
const conn = connect();

//Passing the connection variable into the Set Up Input function
setupInput(conn);