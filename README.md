# Projeto do Minicurso IX CONINFA - API de Cursos e Estudantes

Este projeto foi desenvolvido para fins didáticos durante o Minicurso do IX CONINFA - Congresso Interdisciplinar do UniRios. É uma API construída usando Node.js, TypeScript, Express, UUID e Prisma ORM, apresentando diversos conceitos essenciais para o desenvolvimento de APIs, incluindo gerenciamento de dependências, manipulação de dados com Prisma e rotas HTTP.

## Tecnologias Utilizadas 🚀

- **Node.js**
- **TypeScript**
- **Express**
- **UUID**
- **Prisma ORM**

## Conteúdo do Minicurso 📚

Durante o minicurso, foram abordados os seguintes tópicos:

- **Node.js**
- **Gerenciamento de Dependências do Projeto com NPM**
- **Tipos, Arrays, Interfaces e Classes com TypeScript**
- **Métodos HTTP**
- **Parâmetros da Requisição HTTP (Route Params, Query Params, Body Params, Headers Params)**
- **Status Code**
- **UUID**
- **Middlewares**
- **Operações CRUD com Prisma (Insert, Select, Update e Delete)**
- **SQLite**

## Descrição do Projeto 📖

Este projeto consiste em uma API que permite o cadastro de cursos e estudantes, onde cada estudante deve estar associado a um curso.

## Rotas da Aplicação 🛣️

### Cursos

- **POST '/courses'**: Cadastra um novo curso.
- **GET '/courses'**: Lista todos os cursos cadastrados.
- **GET '/courses/:id'**: Obtém informações de um curso específico pelo ID.

### Estudantes

- **POST '/students'**: Cadastra um novo estudante.
- **GET '/students'**: Lista todos os estudantes cadastrados.
- **DELETE '/students/:id'**: Remove um estudante pelo ID.
- **PATCH '/students/:id'**: Edita as informações de um estudante pelo ID.
- **GET '/students/:id'**: Obtém informações de um estudante pelo ID.

## Como Executar o Projeto Localmente 🏃‍♂️

Para executar este projeto em sua própria máquina, siga os passos abaixo:

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/igorgalindop/project-ix-coninfa-unirios.git
   ```
2. **Instale as Dependências**
   ```bash
   cd project-ix-coninfa-unirios
   npm install
   ```
3. **Configuração do Banco de Dados**
   Renomeie o arquivo `.env.example` para `.env`
4. **Executar o Serviço**
   ```bash
   npm run start
   ```
5. **Acessar a API**
   A API estará disponível em `http://localhost:3000`
