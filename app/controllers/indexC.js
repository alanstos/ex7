
var express = require('express');
var router = express.Router();
var Log = require('../models/Log');

var app = express();

/* GET home page. */
exports.raiz = function(req, res, next) {

    var logss;
	
	console.log('raiz no controllers....');
	
	Log.findAll().then(function(logs) {
		logs.forEach(function (log) {
			console.log(log.id, log.nome, log.descricao);
		})
		
		console.log('variavel logs : ' , logs);
		console.log('variavel logs[0] : ' , logs[0].nome);
		

		
		console.log("Total de linhas na tabela re_log. ", logs.length);
		
		res.render('index', { title: 'Express', logss : logs, appnome : 'valor qualquer' });
	});		
	
  console.log('----------variavel logss : ' , logss); 
  
};

//manter
exports.manter = function(req, res, next) {
	console.log("ENTROU NO MANTER NOVO.... :");
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
  
};


//merge
exports.merge =  function(req, res, next) {
	console.log("ENTROU NO merge novo.... :");
	var nome = req.body.nome;
	var id = req.body._id;
	console.log("log.... merge = ", nome, " id=",id);
	res.render('manter', { id: id,  nome : nome ,msg : "Enviado com sucesso"});
};
