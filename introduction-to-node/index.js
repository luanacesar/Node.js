
// const fs =require("fs");
// fs.copyFileSync("file1.txt","file2.txt");

const superheroes = require("superheroes");
const supervillains = require("supervillains");

var mysuper = superheroes.random();
var villains = supervillains.random();

console.log(villains);
console.log(mysuper);