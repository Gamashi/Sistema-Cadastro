const Cadastro = require("../models/Cadastro");

module.exports = {
  validaNome(nome) {
    if (!nome || typeof nome == undefined || nome == null || nome.length <= 2) {
       return {texto: "Nome inválido"};
    }
    return null;
  },

  async emailJaCadastrado (email) {
    const usuario = await Cadastro.findOne({ where: { email: email } });
    if (usuario === null) {
      return null;
    }
      return {texto: "E-mail já cadastrado"};
          
  },
  validaTelefone(telefone){
    if(!telefone || typeof telefone == undefined || telefone == null || telefone.length < 8 ){
      return {texto: "Número de telefone inválido"}
    }
    return null;
  }

    
};
