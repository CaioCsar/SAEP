const Sequelize = require("sequelize");

const db = require("./db");

const alocacoes = db.define("alocacao",{
   id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
   },
   area:{
    type: Sequelize.INTEGER,
    allowNull: false,
   },
   automoveis:{
    type: Sequelize.INTEGER,
    references: 'automoveis', // <<< Note, its table's name, not object name
    referencesKey: 'id' // <<< Note, its a column name
   },
   concessionarias:{
    type: Sequelize.INTEGER,
    references: 'concessionarias', // <<< Note, its table's name, not object name
    referencesKey: 'id' // <<< Note, its a column name
   },
   cliente:{
    type: Sequelize.INTEGER,
    references: 'clientes', // <<< Note, its table's name, not object name
    referencesKey: 'id' // <<< Note, its a column name
   },
   quantidade:{
    type: Sequelize.INTEGER,
    allowNull: false,
   },
});

//Criar tabela caso nao exista
//alocacoes.sync();

//Verifica se há alguma diferença na tablea e realiza a atualizacao da mesma
//automoveis.sync({alter:true});

//Exportar a tabela 
module.exports = alocacoes;