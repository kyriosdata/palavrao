# palavrao

Filtro para palavrão, palavra obscena, termo chulo ou termo considerado "evitável" em português. Isto é útil, por exemplo, para filtrar termos empregados em trocas de mensagens, cadastro de nomes de usuários e cadastro de emails, dentre outros cenários.

> Este projeto não tem a pretensão de ser exaustivo, absoluto, perfeito, nem tampouco censurador. Use-o apenas caso considere apropriado. Sua contribuição também é bem-vinda.

Um projeto de propósito similar para a língua inglesa é o [badwords](https://github.com/web-mech/badwords).

## Implementação em JavaScript

Encontra-se disponível via npm package [palavrao](https://www.npmjs.com/package/palavrao).
A implementação está no diretório [js](js).

## Uso

Consulte [uso](uso) para ilustração de emprego tanto via _navegador_ quanto _nodejs_.
Você pode experimentar por meio da página https://kyriosdata.github.io/palavrao.

## Fontes (termos "inválidos")

A principal fonte foi a lista de termos "inválidos" disponível no documento "Especificação Técnica para Integração PIX-PDQ com o Cartão Nacional de Saúde V5" produzido pelo DATASUS (Ministério da Saúde).

Adicionalmente, a dissertação [mestrado](https://alib.ufba.br/sites/alib.ufba.br/files/benke_vanessa._tabus_linguisticos.pdf) é uma referência aqui registrada para eventual
consulta posterior.

Em [fontes](fontes) contém alguns scripts empregados durante a preparação da base de dados (palavrões).
