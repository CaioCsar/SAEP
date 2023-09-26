const Sequelize = require("sequelize")

const sequelize = new Sequelize("saep", "root", "", {
  host: "localhost",
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(function () {
    console.log("Conexao com a base de dados feita com sucesso.")
  }).catch(function () {
    console.log("Erro na conexao com a base de dados.")
  })

module.exports = sequelize;