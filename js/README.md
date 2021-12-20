## palavrao

Um detector de palavras "evitáveis", ou "palavrões". Sugestões (acréscimo e/ou remoção) são bem-vindas.

Veja publicação em https://www.npmjs.com/package/palavrao

## Instalação

- `npm install palavrao`

## Uso

```js
import { evitavel } from "palavrao";
...

console.log(evitavel("amor")); // deve retorar "false"

```

## Desenvolvimento

- `npm install`
- `npm run test`

## Inserção de nova palavra na lista de evitáveis

- Execute `node atualiza.js termoChulo`. Isto fará com que "termoChulo"
  seja inserido na base de dados criada no arquivo `novo.js`.
- Renomeie `novo.js` (gerado no passo anterior) para `palavroes.js` (base de dados empregada)
- Atualize `package.json` com nova versão
- `npm login`
- `npm publish`
