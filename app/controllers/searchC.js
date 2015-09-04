var express = require('express');
var router = express.Router();


var app = express();

exports.index = 
	function(req, resp){
		  console.log('----------usando controle -  : ' );
          res.render('searchV', { title: 'SEARCH', logss : 'LOG', appnome : 'SEARCH' });
	}



/* GET home page. */
//router.get('/', function(req, res, next) {
//  console.log('----------variavel logss : ' );
//  res.render('searchV', { title: 'SEARCH', logss : 'LOG', appnome : 'SEARCH' });
//});



module.exports = router;