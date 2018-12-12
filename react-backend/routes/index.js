var express = require('express');
const MysqlCache = require('mysql-cache');
var router = express.Router();
var path = require('path');

// // Connect string to MySQL
var mysql = require('mysql');
// const db = mysql.createConnection({
  // host     : 'rds-mysql-cis550movie.cse71gfxjvmn.us-east-1.rds.amazonaws.com',
  // user     : 'CIS550Movie',
  // password : 'cis550movie',
  // // database : 'dbMovie'
// });

const db2 = new MysqlCache({
    host:            'rds-mysql-cis550movie.cse71gfxjvmn.us-east-1.rds.amazonaws.com',
    user:            'CIS550Movie',
    password:        'cis550movie',
    database:        'dbMovie',
    cacheProvider:   'LRU',
})

// db.connect((err) => {
    // if (err) {
        // throw err;
    // }
    // console.log('Connected to database');
// });
// global.db = db;

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

router.get('/brad_pitt', function(req,res) {
  var query = 'SELECT DISTINCT IMDB_ID, movie_imdb_link, title, poster_path, overview FROM IMDB NATURAL JOIN Actors NATURAL JOIN Kaggle WHERE Actor = \'Brad Pitt\' AND title_year >= 1990 ORDER BY imdb_score DESC';
  db2.query(query, [1,5], (err, rows, cache) => {
    if (err) console.log(err);
    else {

        res.json(rows);
    }  
    });
});

//Traditional Queries
router.get('/trad/:genre', function(req,res) {
  var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'' + req.params.genre + '\' ORDER BY B.imdb_score';;
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



// router.get('/brad_pitt', function(req,res) {
  // var query = 'SELECT DISTINCT IMDB_ID, movie_imdb_link, title, poster_path, overview FROM IMDB NATURAL JOIN Actors NATURAL JOIN Kaggle WHERE Actor = \'Brad Pitt\' AND title_year >= 1990 ORDER BY imdb_score DESC'; 
  // db.query(query, function(err, rows, fields) {
    // if (err) console.log(err);
    // else {
        // res.json(rows);
    // }  
    // });
// });


// router.get('/cuddling', function(req,res) {
    // var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'Romance\' ORDER BY B.imdb_score DESC LIMIT 6'; 
    // db.query(query, function(err, rows, fields) {
    // if (err) console.log(err);
    // else {
        // res.json(rows);
    // }  
    // });
// });


// router.get('/ben_affleck', function(req,res) {
    // var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID JOIN Actors C ON C.IMDB_ID = A.IMDB_ID WHERE C.Actor = \'Ben Affleck\''; 
    // db.query(query, function(err, rows, fields) {
    // if (err) console.log(err);
    // else {
        // res.json(rows);
    // }  
    // });
// });

// router.get('/spy_movies', function(req,res) {
    // var query = 'select distinct g.imdb_id, b.movie_imdb_link, a.title, a.poster_path, a.overview from Kaggle a join IMDB b on a.imdb_id = b.imdb_id join Genre_Processed g on a.imdb_id = g.imdb_id where a.overview like \'%spy%\' order by b.imdb_score desc limit 6'; 
    // db.query(query, function(err, rows, fields) {
    // if (err) console.log(err);
    // else {
        // res.json(rows);
    // }  
    // });
// });


// router.get('/first_date', function(req,res) {
    // var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'Comedy\' ORDER BY B.imdb_score DESC LIMIT 6;'; 
    // db.query(query, function(err, rows, fields) {
    // if (err) console.log(err);
    // else {
        // res.json(rows);
    // }  
    // });
// });

// router.get('/horror_night', function (req, res) {
    // var query = 'SELECT DISTINCT G.IMDB_ID, B.movie_imdb_link, A.title, A.poster_path, A.overview FROM Kaggle A JOIN IMDB B ON A.IMDB_ID = B.IMDB_ID JOIN Genre_Processed G ON A.IMDB_ID = G.IMDB_ID WHERE G.Genres = \'Horror\' ORDER BY B.imdb_score DESC LIMIT 6';
    // db.query(query, function (err, rows, fields) {
        // if (err) console.log(err);
        // else {
            // res.json(rows);
        // }
    // });
// });

// router.get('/brad_pitt', function(req,res) {
  // var query = 'SELECT DISTINCT IMDB_ID, movie_imdb_link, title, poster_path, overview FROM IMDB NATURAL JOIN Actors NATURAL JOIN Kaggle WHERE Actor = \'Brad Pitt\' AND title_year >= 1990 ORDER BY imdb_score DESC'; 
  // db.query(query, function(err, rows, fields) {
    // if (err) console.log(err);
    // else {
        // res.json(rows);
    // }  
    // });
// });



module.exports = router;
