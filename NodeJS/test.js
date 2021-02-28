var path = require("path");

var hello = "Hello from Node JS Variable";
console.log(`Printing Variable hello: ${hello}`);

console.log("Directory name: " + __dirname);
console.log("Directory and File Name: " + __filename);

console.log("Using PATH module: ");
console.log(`Hello from file ${path.basename(__filename)}`);

console.log(`Process args: ${process.argv}`);