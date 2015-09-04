var Sequelize = require('sequelize');

var config = require('../bd.js');

console.log('valor do config user = ', config.user);
console.log('valor do config banco_name= ', config.banco_name);

//var sequelize = new Sequelize('jdbc:mysql://localhost:3306/recorrame');

var sequelize = new Sequelize(config.banco_name, config.user, config.senha, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Definir o meu model de Log
var Log = sequelize.define('re_log', {
  nome: {
    type: Sequelize.STRING,
    field: 'nome' // caso queira renomear
  },
  descricao: {
    type: Sequelize.STRING
  },
  data: {
    type: Sequelize.DATE
  }  
}, {
  freezeTableName: false // usar o nome da tabela o mesmo nome definido para o model 'usuario'
});

module.exports = sequelize.model('re_log',Log);