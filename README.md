# palavrao

Filtro para palavrão, palavra obscena, termo chulo e outros "evitáveis" em português.

Este projeto não tem a pretensão de ser exaustivo, absoluto, censurador, e podem existir falsos positivos, assim como falsos negativos.

Um projeto de propósito similar para a língua inglesa é o [badwords](https://github.com/web-mech/badwords).

A principal fonte é a lista de termos inválidos disponível em documento técnico do DATASUS (Ministério da Saúde), a Especificação Técnica para Integração PIX-PDQ com o Cartão Nacional de Saúde V5.

## Organização

- [fontes](fontes) contém alguns scripts empregados durante a preparação da base de dados (palavrões).
- [js](js) contém a implementação em JavaScript. Esta implementação pode ser usada tanto por um navegador quanto via Nodejs, conforme ilustrado.
- [wa](https://github.com/kyriosdata/wa) é um projeto equivalente, contudo, ilustra como realizar a mesma operação realizada via WebAssembly.
- [uso](uso) ilustra emprego tanto via _navegador_ quanto _nodejs_.
