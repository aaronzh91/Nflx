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

// router.get("/crying_in_bed", function (req, res, next) {
  // // TODO step1 get sth from mysql, it should be include link, src and title
  // // TODO step2 parse them to a json
  // // example, you now get link, src and title arr
  // var linkArr = ["https://www.qq.com", "https://www.126.com", "https://www.bilibili.com"];
  // var srcArr = ["https://img5.duitang.com/uploads/item/201601/08/20160108212022_YPkGR.jpeg", "https://img5.duitang.com/uploads/item/201601/08/20160108212022_YPkGR.jpeg", "https://img5.duitang.com/uploads/item/201601/08/20160108212022_YPkGR.jpeg"];
  // var titleArr = ["1", "1", "1"];
  // // create a empty arr
  // var json = [];
  // // padding data
  // for (let index = 0; index < linkArr.length; index++) {
    // json.push({
      // "link": linkArr[index],
      // "src": srcArr[index],
      // "title": titleArr[index]
    // })
  // }
  // res.json(json);
// })

// Snuggle tag queries
router.get('/crying_in_bed', function(req,res) {
  var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'Tragedy\' ORDER BY B.imdb_score DESC LIMIT 6'; 
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});

router.get('/cuddling', function(req,res) {
    var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'Romance\' ORDER BY B.imdb_score DESC LIMIT 6'; 
    connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});

router.get('/ben_affleck', function(req,res) {
    var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID JOIN Actors C ON C.IMDB_ID = A.IMDB_ID WHERE C.Actor = \'Ben Affleck\'; 
    connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});

router.get('/spy_movies', function(req,res) {
    var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE A.overview LIKE \'%spy%\' ORDER BY B.imdb_score DESC LIMIT 6'; 
    connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});

router.get('/first_date', function(req,res) {
    var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'Comedy\' ORDER BY B.imdb_score DESC LIMIT 6;'; 
    connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});

router.get('/horror_night', function (req, res) {
    var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'Horror\' ORDER BY B.imdb_score DESC LIMIT 6';
    connection.query(query, function (err, rows, fields) {
        if (err) console.log(err);
        else {
            res.json(rows);
        }
    });
});

//router.get('/crying_in_bed', function (req, res) {
//    var query = '';
//    connection.query(query, function (err, rows, fields) {
//        if (err) console.log(err);
//        else {
//            res.json(rows);
//        }
//    });
//});

//router.get('/crying_in_bed', function (req, res) {
//    var query = '';
//    connection.query(query, function (err, rows, fields) {
//        if (err) console.log(err);
//        else {
//            res.json(rows);
//        }
//    });
//});


router.get('/brad_pitt', function(req,res) {
  var query = 'SELECT DISTINCT IMDB_ID, movie_imdb_link, title, poster_path, overview FROM IMDB NATURAL JOIN Actors NATURAL JOIN Kaggle WHERE Actor = \'Brad Pitt\' AND title_year >= 1990 ORDER BY imdb_score DESC'; 
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});

module.exports = router;
