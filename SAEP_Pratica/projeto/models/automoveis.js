const Sequelize = require("sequelize");

const db = require("./db");

const automovel = db.define("automoveis",{
   id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
   },
   modelo:{
    type: Sequelize.STRING,
    allowNull: false,
   },
   preco:{
    type: Sequelize.DOUBLE,
    allowNull: false,
   },
   clientes:{
    type: Sequelize.INTEGER,
    references: 'clientes', // <<< Note, its table's name, not object name
    referencesKey: 'id' // <<< Note, its a column name
   }
});

//Criar tabela caso nao exista
//automovel.sync();

//Verifica se há alguma diferença na tablea e realiza a atualizacao da mesma
//automoveis.sync({alter:true});

//Exportar a tabela 
module.exports = automovel;