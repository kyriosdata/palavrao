import { evitavel, normaliza, palavroes, buscaBinaria } from "./index.js";
import fs from "fs/promises";

/**
 * Função que insere uma palavra em uma lista de
 * palavrões atualizada e persistida no arquivo 'novo.js'. O
 * conteúdo deste arquivo deve substituir aquele empregado por
 * 'palavroes.js'.
 *
 * Apenas forneça a palavra a ser inserida na lista de palavrões.
 */
function insere() {
  // Se argumento não é fornecido, então não há o que fazer.
  if (process.argv.length < 3) {
    console.log("Forneça argumento a ser inserido na base de palavrões");
    return;
  }

  // Ignore se termo já considerado
  if (evitavel(process.argv[2])) {
    console.log("Termo já considerado. Nenhuma atualização realizada.");
    return;
  }

  // Normalizar palavra a ser inserida
  const palavra = normaliza(process.argv[2]);

  // Palavra não encontrada
  // (identificar posição de inserção da palavra)
  const posicao = -1 * buscaBinaria(palavroes, palavra);

  console.log("Posicao de inserção de", palavra, "em", posicao);

  // Realiza inserção
  palavroes.splice(posicao, 0, palavra);

  // Confere
  console.log(
    "Confere inserção com consulta de termo evitavel:",
    evitavel(palavra)
  );

  // Persiste vetor js de nome palavroes.js
  const conteudo = "export default " + JSON.stringify(palavroes);

  const msg = "Concluído. Vetor atualizado em 'novo.js'.";
  fs.writeFile("novo.js", conteudo).then(() => console.log(msg));
}

insere();
