const readline = require("readline");
const fs = require("fs");

function processador() {
  return new Promise((resolve, reject) => {
    try {
      const leitor = readline.createInterface({
        input: fs.createReadStream(process.argv[2]),
        console: false,
      });

      const vetor = [];
      const processa = (linha) => vetor.push(linha.toLowerCase());
      leitor.on("line", processa);

      leitor.on("close", () => {
        vetor.sort();
        resolve(vetor);
      });
    } catch (error) {
      reject(error);
    }
  });
}

async function main() {
  const vetor = await processador();
  vetor.forEach((element) => {
    console.log(element);
  });
}

main();
