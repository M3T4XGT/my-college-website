import fs from "fs";
const data = JSON.parse(fs.readFileSync("result.json", "utf-8"));
console.log(JSON.stringify(data, null, 2));
