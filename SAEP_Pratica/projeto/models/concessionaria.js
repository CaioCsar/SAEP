const Sequelize = require("sequelize");

const db = require("./db");

const concessionaria = db.define("concessionarias",{
   id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
   },
   concessionaria:{
    type: Sequelize.STRING,
    allowNull: false,
   }
});

//Criar tabela caso nao exista
//concessionaria.sync();

//Verifica se há alguma diferença na tablea e realiza a atualizacao da mesma
//automoveis.sync({alter:true});

//Exportar a tabela 
module.exports = concessionaria;