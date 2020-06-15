var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('这是个用户');
});
router.get('/xxx', function(req, res, next) {
  res.send('这是个用户xxx');
});

module.exports = router;
