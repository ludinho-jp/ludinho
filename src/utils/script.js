const fs = require("fs/promises");

(async function () {
  const data = await fs.readFile("data.json");
  console.log(data.toString());
})();
