Projeto de Cadastro de Usuários
Esse projeto tem como objetivo permitir o cadastro de usuários em um sistema utilizando uma aplicação web.

Pré-requisitos
Node.js instalado na máquina

Como rodar o projeto

Clone o repositório em sua máquina
Abra o terminal e navegue até o diretório do projeto
Execute o comando npm install para instalar as dependências
Execute o comando npm start para iniciar a aplicação
Acesse a aplicação no navegador pelo endereço http://localhost:8081/main/home
Funcionalidades
Cadastro de usuários
Para cadastrar um usuário, preencha o formulário na página inicial da aplicação com os seguintes campos:

Nome
Email
Telefone
Empresa
Clique no botão "Cadastrar" para enviar os dados e criar um novo usuário.

Listagem de usuários
Para visualizar a lista de usuários cadastrados, acesse a página http://localhost:8081/e/cadastro.

Edição de usuários
Para editar um usuário cadastrado, clique no botão "Editar" ao lado do usuário desejado na lista de usuários. 
Validações
As seguintes validações são realizadas no formulário de cadastro:

Nome: deve conter mais de 2 caracteres
Email: deve ser único, ou seja, não pode já estar cadastrado no sistema
Telefone: deve conter 8 dígitos

Tecnologias utilizadas
Node.js
Express
Sequelize
Handlebars

Autor
Gustavo Marques Machado - guto.3122@gmail.com
