

var express = require('express');
var router_ = express.Router();

var app = express();

var Log = require('../models/Log');
var indexC = require('../controllers/indexC');

console.log('nova forma.....');
console.log('controllers.....');


/* ROTAS */
router_.get('/', indexC.raiz);

router_.get('/manter', indexC.manter);

router_.post('/merge', indexC.merge)
  

module.exports = router_;
