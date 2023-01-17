const fs = require("fs");

fs.readFile("data.js", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
});
