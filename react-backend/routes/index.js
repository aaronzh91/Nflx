var express = require('express');
var router = express.Router();
var path = require('path');

// Connect string to MySQL
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'rds-mysql-cis550movie.cse71gfxjvmn.us-east-1.rds.amazonaws.com',
  user     : 'CIS550Movie',
  password : 'cis550movie',
  database : 'dbMovie'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
