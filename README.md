# palavrao

Filtro para palavrão, palavra obscena, termo chulo ou termo considerado "evitável" em português. Isto é útil, por exemplo, para filtrar termos em trocas de mensagens, cadastro de nomes de usuários e cadastro de emails, dentre outros cenários.

> Este projeto não tem a pretensão de ser exaustivo, absoluto, perfeito, nem tampouco censurador. Use-o apenas caso considere apropriado. Sua contribuição também é bem-vinda.

O filtro é oferecido por meio de duas funções básicas:
- identificar se uma palavra fornecida é considerada palavrão, ou seja, a função **evitavel(palavra)** retorna verdadeiro ou falso conforme a palavras fornecida seja considerada "evitável" ou não, e
- substituir caracteres que correspondem a um palavrão por um caractere fornecido em uma sequência também fornecida, por exemplo, **mascara(sequencia, "\*")** retorna uma sequência de caracteres onde aqueles correspondentes a palavrões, se identificados, são substituídos pelo caractere **\***. 

Um projeto de propósito similar para a língua inglesa é o [badwords](https://github.com/web-mech/badwords).

A principal fonte foi a lista de termos "inválidos" disponível no documento "Especificação Técnica para Integração PIX-PDQ com o Cartão Nacional de Saúde V5" produzido pelo DATASUS (Ministério da Saúde).

## Organização

- Dissertação [mestrado](https://alib.ufba.br/sites/alib.ufba.br/files/benke_vanessa._tabus_linguisticos.pdf) pode identificar outras fontes. 
- [fontes](fontes) contém alguns scripts empregados durante a preparação da base de dados (palavrões).
- [js](js) contém a implementação em JavaScript. Esta implementação pode ser usada tanto por um navegador quanto via Nodejs, conforme ilustrado.
- [wa](https://github.com/kyriosdata/wa) é um projeto equivalente, contudo, ilustra como realizar a mesma operação realizada via WebAssembly.
- [uso](uso) ilustra emprego tanto via _navegador_ quanto _nodejs_.
