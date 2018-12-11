var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get("/crying_in_bed", function (req, res, next) {
  // TODO step1 get sth from mysql, it should be include link, src and title
  // TODO step2 parse them to a json
  // example, you now get link, src and title arr
  var linkArr = ["https://www.qq.com", "https://www.126.com", "https://www.bilibili.com"];
  var srcArr = ["https://img5.duitang.com/uploads/item/201601/08/20160108212022_YPkGR.jpeg", "https://img5.duitang.com/uploads/item/201601/08/20160108212022_YPkGR.jpeg", "https://img5.duitang.com/uploads/item/201601/08/20160108212022_YPkGR.jpeg"];
  var titleArr = ["1", "1", "1"];
  // create a empty arr
  var json = [];
  // padding data
  for (let index = 0; index < linkArr.length; index++) {
    json.push({
      "link": linkArr[index],
      "src": srcArr[index],
      "title": titleArr[index]
    })
  }
  res.json(json);
})

module.exports = router;
