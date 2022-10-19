const { connect } = require("../snake_client/client");
const { setupInput } = require("../snake_client/input");


console.log("Connecting ...");
connect();
setupInput();