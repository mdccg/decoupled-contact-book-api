# decoupled-contact-book-api

## Sumário

- [decoupled-contact-book-api](#decoupled-contact-book-api)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este app consiste em uma refatoração do repositório já refatorado anteriormente, [refactored-contact-book-api](https://github.com/mdccg/refactored-contact-book-api). A razão desta refatoração desta vez não foi o framework de testes, e sim o fato de que a dependência [`mongoose`](https://npmjs.com/package/mongoose) obriga o time de desenvolvimento a escrever códigos muito acoplados apenas para acessar instâncias de bancos de dados MongoDB.

Além disso, foram abordados conceitos como classes DAO (do inglês: _Data Access Object_) genéricas e boas convenções para facilitar a troca de banco de dados ou a tecnologia que faz o acesso ao banco de dados, por exemplo.

Este foi o quinto repositório de código apresentado no [Curso Superior de TSI](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) do IFMS como requisito para obtenção da nota parcial das atividades da unidade curricular Linguagem de Programação III.

| [&larr; Repositório anterior](https://github.com/mdccg/postal-code-api) | [Próximo repositório &rarr;](#) |
|-|-|

## Pilha de tecnologia

## Como rodar

### Pré-requisitos

### Passo a passo
