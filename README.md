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

Este app consiste em uma refatoração do repositório já refatorado anteriormente, [refactored-contact-book-api](https://github.com/mdccg/refactored-contact-book-api), mas desta vez utilizando Prisma e PostgreSQL. A razão para a nova refatoração não foi o framework de testes, mas sim o fato de que a dependência [`mongoose`](https://npmjs.com/package/mongoose/) obrigava o time de desenvolvimento a escrever códigos muito acoplados apenas para acessar instâncias de bancos de dados MongoDB.

Com a utilização de Prisma e PostgreSQL, foram abordados conceitos como classes DAO (do inglês: _Data Access Object_) genéricas e boas convenções para facilitar a troca de banco de dados ou a tecnologia que faz o acesso ao banco de dados, por exemplo.

Este foi o quinto repositório de código apresentado no [Curso Superior de TSI](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) do IFMS como requisito para obtenção da nota parcial das atividades da unidade curricular Linguagem de Programação III.

| [&larr; Repositório anterior](https://github.com/mdccg/postal-code-api) | [Próximo repositório &rarr;](https://github.com/mdccg/decoupled-postal-code-api) |
|-|-|

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Virtualização de banco de dados | [Docker](https://www.docker.com/) |
| Banco de dados | [PostgreSQL](https://www.postgresql.org/) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional);
- [Docker](https://docs.docker.com/engine/install/).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);

3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Com o Docker instalado, execute o comando abaixo para levantar o _container_ Docker com o respectivo banco de dados virtualizado. Certifique-se de estar no diretório do arquivo `docker-compose.yml`;

```console
$ docker-compose up -d
```

O parâmetro `-d` serve para desocupar o shell de comando logo após a execução do comando. É uma boa convenção, ao encerrar a execução do app, derrubar o _container_ levantado através do comando:

```console
$ docker-compose down
```

Mas, não se preocupe. As tuplas inseridas no banco de dados não serão deletadas com a derrubada do _container_.

5. Finalmente, execute o seguinte comando para executar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```
