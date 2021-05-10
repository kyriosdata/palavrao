## palavrao

Um "detector" de palavras "evitáveis".

> Sugestões (acréscimo ou remoção) são bem-vindas.

## Instalação

`npm install palavrao`

## Uso

```js
const evitar = require("palavrao");
...


if (evitar(palavra)) {
    // Esta palavra foi considerada 'evitável'
    // Você pode ignorá-la, substituí-la por '*', ...
}
```
