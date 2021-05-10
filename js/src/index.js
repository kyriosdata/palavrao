const palavroes = require("./palavroes.json");

/**
 * Verifica se a palavra fornecida é um termo a ser evitado, ou seja, considerado
 * 'chulo'.
 *
 * @param {string} palavra Termo que pode ser considerado 'chulo' ou 'evitável'.
 * @returns Verdadeiro se a palavra é considerada evitável e falso, caso não seja considerada um 'palavrão'.
 */
function evitar(palavra) {
  if (!palavra) {
    return false;
  }

  const semEspacos = palavra.trim();
  if (semEspacos.length == 0) {
    return false;
  }

  return palavroes.includes(semEspacos.toLowerCase());
}

module.exports = evitar;
