var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Goal Contract' });
});

router.get('/finePrint', function(req, res, next) {
  res.render('contract', { title: 'Create Contract' });
});
module.exports = router;
