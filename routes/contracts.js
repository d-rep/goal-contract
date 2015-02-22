var express = require('express');
var router = express.Router();
var services = require('../lib/services');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var contracts = services.getContracts();
  res.json(contracts);
});

module.exports = router;
