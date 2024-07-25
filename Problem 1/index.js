const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let balanced = true;
rl.question("", (input) => {
  for (let i = 0; i < input.length / 2; i++) {
    switch (input[i]) {
      case "{":
        if (input[input.length - (i + 1)] === "}") {
          continue;
        } else {
          balanced = false;
          break;
        }
        break;
      case "[":
        if (input[input.length - (i + 1)] === "]") {
          continue;
        } else {
          balanced = false;
          break;
        }
        break;
      case "(":
        if (input[input.length - (i + 1)] === ")") {
          continue;
        } else {
          balanced = false;
          break;
        }
        break;
    }
  }
  console.log(balanced ? "Seimbang" : "Tidak Seimbang");
  rl.close();
});
