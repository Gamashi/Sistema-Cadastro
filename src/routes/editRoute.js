const express = require('express');
const router = express.Router();
const Cadastro = require("../models/Cadastro");
const validacao = require("./validacao.js");

// Rota para exibir todos os cadastros
router.get("/cadastro",function(req, res){
    Cadastro.findAll({order:[["id", "DESC"]]}).then(function(conteudos){
        res.render("sucessoCad",{conteudos: conteudos});
    })     
})

// Rota para exibir o formulário de edição de um cadastro específico
router.get("/cadastros/edit/:email", function(req, res){
    Cadastro.findOne({where: {email: req.params.email}}).then(function(categoria){
        res.render("editaFormulario",{categoria: categoria})
    }) 
})

// Rota para processar a edição de um cadastro
router.post("/cadastros/edit", function(req, res){
    var erros = [];

    // Validação do nome usando a função validaNome do módulo validacao.js
    erros.push(validacao.validaNome(req.body.nome));

    // Validação do telefone usando a função validaTelefone do módulo validacao.js
    erros.push(validacao.validaTelefone(req.body.telefone));

    console.log (erros);

    // Remove erros nulos do array
    erros = erros.filter(function(erro) {
      return erro != null;
    });

    if (erros.length > 0) {
        // Renderiza a página novamente com mensagem de erro caso haja erros de validação
        return res.render("editaFormulario", { categoria: req.body, erros: erros});
    } else {
        // Atualiza o registro do cadastro no banco de dados
        Cadastro.update(
            {nome: req.body.nome, telefone: req.body.telefone, empresa: req.body.empresa}, 
            {where: {email: req.body.email}}
        ).then(function(){
            res.redirect("/e/cadastro")
        })
    }   
})

module.exports = router;