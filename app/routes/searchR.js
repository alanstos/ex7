
var SearchC = require('../controllers/searchC');

module.exports = function(app){
	
	app.get('/', SearchC.index);

	
}


//var express = require('express');
//var router = express.Router();


//var app = express();


/* GET home page. */
//router.get('/', function(req, res, next) {
//  console.log('----------variavel logss : ' );
//  res.render('searchV', { title: 'SEARCH', logss : 'LOG', appnome : 'SEARCH' });
//});



//module.exports = router;
