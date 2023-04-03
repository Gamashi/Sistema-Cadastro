const Sequelize  = require("sequelize");

//Conexeão com Banco de Dados
    const sequelize = new Sequelize("cadastrowe", "root","cnbbeto10",{
        host: "localhost",
        dialect: 'mysql',
        query:{raw:true}
    });

    // sequelize.authenticate().then(function(){
    //     console.log("Conectado com sucesso!");

    // }).catch(function(erro){

    //     console.log("Falha ao se conectar: " +erro);
    // })

    module.exports= {
        Sequelize : Sequelize,
        sequelize : sequelize

    }