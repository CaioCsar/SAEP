const Sequelize = require("sequelize");

const db = require("./db");

const cliente = db.define("clientes",{
   id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
   },
   nome:{
    type: Sequelize.STRING,
    allowNull: false,
   }
});

//Criar tabela caso nao exista
//cliente.sync();

//Verifica se há alguma diferença na tablea e realiza a atualizacao da mesma
//automoveis.sync({alter:true});

//Exportar a tabela 
module.exports = cliente;