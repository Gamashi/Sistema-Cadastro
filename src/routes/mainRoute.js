const express = require('express');
const router = express.Router();
const Cadastro = require("../models/Cadastro");
const validacao = require("./validacao.js");

// Define a rota "/home"
router.get("/home", function(req, res){
    // Renderiza o arquivo "./formulario"
    res.render("./formulario");
})

// Define a rota "/add" para receber um formulário via método POST
router.post("/add", async function(req, res) {
    var erros = [];

    // Valida o nome, e-mail e telefone usando funções definidas no arquivo "./validacao.js"
    erros.push(validacao.validaNome(req.body.nome));
    erros.push(await validacao.emailJaCadastrado(req.body.email));
    erros.push(validacao.validaTelefone(req.body.telefone));
    console.log (erros) 

    // Remove erros nulos do array
    erros = erros.filter(function(erro) {
      return erro != null;
    });

    // Se houver erros, renderiza novamente a página do formulário com a mensagem de erro
    if (erros.length > 0) {
      res.render("../views/formulario", {erros: erros});
    } else {
      // Se não houver erros, cria um novo cadastro na base de dados
      Cadastro.create({
        nome:req.body.nome,
        email:req.body.email,
        telefone:req.body.telefone,
        empresa:req.body.empresa
      }).then(function(){
        // Redireciona para a rota "/cadastro" quando o cadastro for criado com sucesso
        res.redirect("/e/cadastro")
      }).catch(function(erro){
        // Exibe uma mensagem de erro caso ocorra algum problema ao criar o cadastro
        res.send("Ocorreu um erro: " + erro)
      }) 
    }
})

module.exports = router;