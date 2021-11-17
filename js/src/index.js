import palavroes from "./palavroes.js";

/**
 * Executa busca do elemento no vetor fornecido empregando
 * a função de comparação fornecida.
 *
 * @param {vector} vetor Vetor contendo strings.
 * @param {string} elemento Sequência de caracteres a ser procurada.
 *
 * @returns O valor positivo correspondente à posição do elemento
 * no vetor ou um valor negativo, cujo valor em módulo identifica a
 * posição em que o elemento, se for o caso, deveria ser inserido.
 */
function buscaBinaria(vetor, elemento) {
  const compara = (a, b) => a.localeCompare(b);
  var m = 0;
  var n = vetor.length - 1;
  while (m <= n) {
    var k = (n + m) >> 1;
    var cmp = compara(elemento, vetor[k]);
    if (cmp > 0) {
      m = k + 1;
    } else if (cmp < 0) {
      n = k - 1;
    } else {
      return k;
    }
  }

  return -n - 1;
}

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

  const posicao = buscaBinaria(palavroes, procurePor);
  if (posicao == 0) {
    return palavra == palavroes[0];
  }

  return posicao > 0;
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

export { evitavel, normaliza, palavroes, buscaBinaria };
