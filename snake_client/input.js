const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//close the game if the user presses control + c
const handleUserInput = function(input) {
  if (input === '\u0003') {
    process.exit();
  }
};

//exporting the set up input function

module.exports = {
  setupInput
};