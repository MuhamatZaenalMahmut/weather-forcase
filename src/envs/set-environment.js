const fs = require('fs');
const env = process.argv[2]
const envFileContent = require(`./${env}.json`);
fs.writeFileSync("env.json", JSON.stringify(envFileContent, undefined, 2));
