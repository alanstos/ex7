

var express = require('express');
var router_ = express.Router();

var app = express();

var Log = require('../models/Log');
var indexC = require('../controllers/indexC');

console.log('nova forma.....');
console.log('controllers.....');


//var Sequelize = require('sequelize');

//var sequelize = new Sequelize('jdbc:mysql://localhost:3306/recorrame');

/* var sequelize = new Sequelize(config.banco_name, config.user, config.user, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

}); */

// Definir o meu model de Log
//var Log = sequelize.define('re_log', {
 // nome: {
//    type: Sequelize.STRING,
//    field: 'nome' // caso queira renomear
//  },
//  descricao: {
//    type: Sequelize.STRING
//  },
//  data: {
//    type: Sequelize.DATE
//  }  
//}, {
//  freezeTableName: false // usar o nome da tabela o mesmo nome definido para o model 'usuario'
//});


/* GET home page. */
router_.get('/', indexC.raiz);

router_.get('/manter', function(req, res, next) {

 var id = req.query.id;
 
 Log.findOne({ where: {id: id} }).then(function(log) {
  // project will be the first entry of the Projects table with the title 'aProject' || null
  console.log("findOnde = " , log.nome);
  res.render('manter', { id: id,  nome : log.nome });
})
 
 Log.findById(id).then(function(log) {
  // project will be an instance of Project and stores the content of the table entry
  // with id 123. if such an entry is not defined you will get null
  
  
})
  

router_.post('/merge', function(req, res, next) {
	var nome = req.body.nome;
	var id = req.body._id;
    console.log("log.... merge = ", nome, " id=",id);
	res.render('manter', { id: id,  nome : nome ,msg : "Enviado com sucesso"});
})
  
  
});


module.exports = router_;
