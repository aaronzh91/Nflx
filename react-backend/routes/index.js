var express = require('express');
const MysqlCache = require('mysql-cache');
var router = express.Router();
var path = require('path');

// // Connect string to MySQL
var mysql = require('mysql');
const db = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
});

const db2 = new MysqlCache({
    host:            '',
    user:            '',
    password:        '',
    database:        '',
    cacheProvider:   ''
})

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

db2.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Snuggle tag queries
router.get('/adventure', function(req,res) {
  var query = 'select distinct IMDB_ID, movie_imdb_link, title, poster_path, overview from Kaggle natural join IMDB natural join Genre_Processed where Genres LIKE \'Adventure\' order by imdb_score desc'; 
  db2.query(query, [1,5], (err, rows, cache) => {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});

router.get('/cuddling', function(req,res) {
  var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'Romance\' ORDER BY B.imdb_score DESC'; 
  db2.query(query, [1,5], (err, rows, cache) => {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});

router.get('/ben_affleck', function(req,res) {
  var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'Romance\' ORDER BY B.imdb_score DESC'; 
  db2.query(query, [1,5], (err, rows, cache) => {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});

router.get('/first_date', function(req,res) {
  var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'Comedy\' ORDER BY B.imdb_score DESC';
  db2.query(query, [1,5], (err, rows, cache) => {
    if (err) console.log(err);
    else {

        res.json(rows);
    }  
    });
});

router.get('/spy_movies', function(req,res) {
  var query = 'select distinct g.imdb_id, b.movie_imdb_link, a.title, a.poster_path, a.overview from Kaggle a join IMDB b on a.imdb_id = b.imdb_id join Genre_Processed g on a.imdb_id = g.imdb_id where a.overview like \'%spy%\' order by b.imdb_score desc';
  db2.query(query, [1,5], (err, rows, cache) => {
    if (err) console.log(err);
    else {

        res.json(rows);
    }  
    });
});

router.get('/horror_night', function(req,res) {
  var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'Horror\' ORDER BY B.imdb_score DESC';;
  db2.query(query, [1,5], (err, rows, cache) => {
    if (err) console.log(err);
    else {
        res.json(rows);
    }  
    });
});

router.get('brad_pitt', function(req,res) {
  var query = 'SELECT DISTINCT IMDB_ID, movie_imdb_link, title, poster_path, overview FROM IMDB NATURAL JOIN Actors NATURAL JOIN Kaggle WHERE Actor = \'Brad Pitt\' AND title_year >= 1990 ORDER BY imdb_score DESC';
  db2.query(query, [1,5], (err, rows, cache) => {
    if (err) console.log(err);
    else {

        res.json(rows);
    }  
    });
});

router.get('/bale_hardy', function(req,res) {
  var query = 'SELECT IMDB_ID, movie_imdb_link, title, poster_path, overview FROM IMDB NATURAL JOIN Kaggle NATURAL JOIN Actors WHERE Actor = \'Christian Bale\' AND IMDB_ID IN (SELECT IMDB_ID FROM Actors WHERE Actor = \'Tom Hardy\') ORDER BY imdb_score DESC';
  db2.query(query, [1,5], (err, rows, cache) => {
    if (err) console.log(err);
    else {

        res.json(rows);
    }  
    });
});



router.get('/top_directors', function(req,res) {
	var query1 = 'CREATE TEMPORARY TABLE DIR (SELECT director_name, SUM(gross) FROM IMDB GROUP BY director_name  ORDER BY SUM(gross) DESC LIMIT 3);'
	var query2 = 'SELECT DISTINCT B.IMDB_ID, A.movie_imdb_link, B.title, B.poster_path, B.overview FROM IMDB A JOIN Kaggle B ON A.IMDB_ID = B.IMDB_ID JOIN DIR WHERE A.Director_name = DIR.Director_name ORDER BY A.IMDB_Score DESC;'
	var query3 = 'DROP TABLE DIR;';
	db.query(query1, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        console.log("Query 1 done");
    }
    });
	db.query(query2, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        console.log("Query 2 done");
		res.json(rows);
    }
    });
	db.query(query3, function(err, rows, fields) {
    if (err) console.log(err);
    else {
        console.log("Query 3 done");
    }
    });
});



//Traditional Queries
router.get('/trad/:genre', function(req,res) {
  var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'' + req.params.genre + '\' ORDER BY B.imdb_score';
  db2.query(query, [1,5], (err, rows, cache) => {
    if (err) {
		console.log(query);
		console.log(err);
	}
    else {

        res.json(rows);
    }  
    });
});

//Search box
router.post('/search/', function(req, res) {
	var query = 'SELECT DISTINCT A.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID WHERE MATCH(A.overview) AGAINST (\'' + req.body.val + '\') ORDER BY B.imdb_score';
	console.log(query);
	db2.query(query, [1,5], (err, rows, cache) => {
    if (err) {
		console.log(query);
		console.log(err);
	}
    else {
		console.log(query);
        res.json(rows);
    }  
    });
});








module.exports = router;
