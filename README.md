# Linha do Tempo da Humanidade

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Descrição

Este é um projeto de linha do tempo interativa que exibe eventos históricos importantes em ordem cronológica. Com ele, você pode pesquisar eventos por assunto e ordená-los por ordem cronológica.

## Como usar

Você pode acessar o aplicativo online no seguinte endereço: https://timelineworld.herokuapp.com/

Se preferir, você também pode baixar o código-fonte e rodar o aplicativo em seu próprio computador. Para isso, siga as instruções abaixo:

1. Clone o repositório do projeto em seu computador.
2. Abra o terminal e navegue até o diretório do projeto.
3. Inicie um servidor web local, por exemplo, usando o Python:
  -No Windows: digite python -m http.server ou python -m SimpleHTTPServer
  -No macOS ou Linux: digite python3 -m http.server ou python3 -m SimpleHTTPServer
4. Abra um navegador da web e navegue até http://localhost:8000 (ou outra porta que você tenha especificado).
5. O aplicativo deve ser carregado corretamente agora.

## Funcionalidades

- Pesquisar eventos por assunto.
- Ordenar eventos por ordem cronológica crescente ou decrescente.

## Como funciona

O aplicativo foi criado usando HTML, CSS e JavaScript. Ele usa o framework Bootstrap para criar o layout e o arquivo timeline.json para obter a lista de eventos históricos.

Quando você abre o arquivo index.html em um navegador da web, o JavaScript carrega o arquivo timeline.json e cria uma lista de eventos. Cada evento é exibido em um item de lista na linha do tempo.

Você pode pesquisar eventos por assunto digitando um termo na barra de pesquisa na parte superior da página. Quando você clica no botão "Pesquisar", o aplicativo usa o motor de busca do Google para encontrar eventos relacionados ao assunto.

Você também pode ordenar os eventos por ordem cronológica crescente ou decrescente clicando no botão "Ordenar".

## Como contribuir

Contribuições são bem-vindas! Se você quiser reportar um problema ou sugerir uma melhoria, abra uma issue neste repositório.

## Tecnologias usadas

- HTML
- CSS
- JavaScript
- Bootstrap

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).
