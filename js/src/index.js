import palavroes from "./palavroes.js";

/**
 * Verifica se a palavra fornecida é um termo que pode
 * ser evitado.
 *
 * OBSERVAÇÃO: não há pretensão alguma de exercer censura a um ou outro
 * termo. Caso não considere uma determinada palavra uma palavra "evitável",
 * então poderá removê-la do conjunto de palavras e, no sentido inverso,
 * caso conheça outras que devam ser acrescentadas, faça o devido
 * acréscimo.
 *
 * @param {string} palavra Termo que pode ser considerado "evitável".
 * @returns Verdadeiro se a palavra é considerada evitável e falso, caso não seja considerada um 'palavrão'.
 */
function evitavel(palavra) {
  const procurePor = normaliza(palavra);

  return palavroes.includes(procurePor);
}

/**
 * Normaliza a palavra para o seu emprego para a busca.
 *
 * @param {string} palavra Palavra a ser normalizada.
 * @returns Palavra fornecida sem acentos, letras minúsculas, espaços removidos e outras.
 * Se não for fornecida palavra, null ou undefined, então palavra retornada
 * será "".
 */
function normaliza(palavra) {
  if (!palavra) {
    return "";
  }

  const minusculas = palavra.toLowerCase();
  const removeExtremidades = minusculas.trim();
  const semEspacos = removeExtremidades.replace(/\s\s+/g, " ");
  return semEspacos.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export { evitavel, normaliza };
