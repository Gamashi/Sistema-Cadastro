//Constante que recebe sequelize;
const db = require("./db")

//Criação tabela com banco de dados;
    const Cad = db.sequelize.define("informaçoes",{

        nome:{
            type: db.Sequelize.STRING
        },
        email:{
            type: db.Sequelize.STRING
        },
        telefone:{
            type: db.Sequelize.STRING
        },
        empresa:{
            type: db.Sequelize.STRING
        }

    })

    module.exports = Cad;

// Cad.sync({force: true}) 
// linha de sincronização(So pode ser executado 1 unica vez)

