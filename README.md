# Colégio Criarte - Página de Cursos Profissionalizantes

Este projeto é uma página descritiva de cursos profissionalizantes oferecidos pelo Colégio Criarte. Ele foi desenvolvido utilizando TypeScript, React, EmailJS, Nookies, Styled-Components, Bootstrap e Polished.

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:felipe-seabra/criarte-website-professionalizing.git
```

Entre no diretório do projeto

```bash
  cd theme-switcher-boilerplate
```

Para instalar as dependências, basta executar o seguinte comando na pasta raiz do projeto:

```bash
  npm install
```

## Execução

Para executar o projeto, basta executar o seguinte comando na pasta raiz do projeto:

```bash
  npm start
```
O projeto será aberto em um servidor local na porta 3000 (http://localhost:3000).

## Build

```bash
  npm run build

```
Será criada uma pasta build na raiz do projeto contendo a versão otimizada para produção do projeto.

## Funcionamento

A página exibe uma lista de cursos profissionalizantes oferecidos pelo Colégio Criarte. Ao clicar em um dos cursos, é exibida uma página de detalhes do curso com informações sobre o mesmo e um formulário de contato para solicitação de mais informações.

O formulário de contato utiliza a API do EmailJS para enviar uma mensagem ao Colégio Criarte com as informações preenchidas pelo usuário.

O site também utiliza o pacote Nookies para armazenar o tema selecionado pelo usuário (claro ou escuro) em um cookie. O tema é aplicado utilizando o pacote Styled-Components.

O Bootstrap é utilizado para a estilização geral do site, e o Polished é utilizado para a manipulação de cores.

© Desenvolvido por [Felipe Seabra](https://www.linkedin.com/in/felipe-seabra/) 