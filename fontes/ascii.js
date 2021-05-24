const palavras = require("./palavroes.json");

// Remoção de acentos, ...
const normalizadas = palavras.map((p) =>
  p.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
);

palavras.forEach((palavra, indice) => {
  if (palavra !== normalizadas[indice]) {
    console.log(palavra, normalizadas[indice]);
  }
});
