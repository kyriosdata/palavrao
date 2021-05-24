## palavrao

Um detector de palavras "evitáveis". Sugestões (acréscimo e/ou remoção) são bem-vindas.

## Instalação

- `npm install palavrao`
- Verifique se seu projeto Node tem como "type" o valor "module" em **package.json**.

## Uso

```js
import { evitavel } from "palavrao";
...

console.log(evitavel("amor")); // deve retorar "false"

```
