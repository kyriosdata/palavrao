# palavrao

Projeto que oferece filtro para palavrão, palavra obscena, termo chulo ou termo considerado "evitável" em português.

Tal filtro é útil, por exemplo, para identificar termos empregados em trocas de mensagens, cadastro de nomes de usuários e cadastro de emails, dentre outros cenários.

> Este projeto não tem a pretensão de ser exaustivo, absoluto, perfeito, nem tampouco censurador. Use-o apenas caso considere apropriado. Sua contribuição também é bem-vinda.

Um projeto de propósito similar para a língua inglesa é o [badwords](https://github.com/web-mech/badwords).

## Requisitos de usuário

- _Como desenvolvedor eu desejo verificar se uma palavra é considerada "evitável" para evitar que ela seja empregada em um sistema de informação._

## Design

Uma lista de palavras consideradas “evitáveis” ou “palavrões” será mantida em uma base (arquivo texto).

Um aplicativo será empregado para atualizar tal lista e produzir os dados compatíveis com as expectativas da busca, por exemplo, ordenação para agilizar a consulta, remoção de acentos e outros. Desta forma, atualização manual e propensa a erros é evitada.

Uma função deve carregar o conteúdo da lista e permitir a realização de consultas. A expectativa é que a verificação seja realizada em um cliente web e, dessa forma, a implementação correspondente deve estar disponível via npm package (https://npmjs.com).

A ilustração de uso tanto para o desenvolvedor quanto para o usuário deve ser fornecida.

## Implementação em JavaScript

Encontra-se disponível via npm package [palavrao](https://www.npmjs.com/package/palavrao).
A implementação está no diretório [js](js).

## Uso

Consulte [uso](uso) para ilustração de emprego tanto via _navegador_ quanto _nodejs_.

Você pode experimentar por meio da página https://kyriosdata.github.io/palavrao.

## Fontes (termos "inválidos")

A principal fonte foi a lista de termos "inválidos" disponível no documento "Especificação Técnica para Integração PIX-PDQ com o Cartão Nacional de Saúde V5" produzido pelo DATASUS (Ministério da Saúde).

A dissertação de [mestrado](https://alib.ufba.br/sites/alib.ufba.br/files/benke_vanessa._tabus_linguisticos.pdf) contém considerações relevantes e que podem ser incluídas em versão futura.
