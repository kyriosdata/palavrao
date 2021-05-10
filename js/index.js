const palavroes = require("./palavroes.json");

const minusculas = palavroes.map((p) => p.toLowerCase());

console.log(JSON.stringify(minusculas));
