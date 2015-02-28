var express = require('express');
var router = express.Router();
var services = require('../lib/services');

/* GET contracts by ID */
router.get('/:id([\\w0-9]+)', function(req, res){
  var id = req.params.id;
  var contract = services.getContract(id);
  res.json(contract);
});

module.exports = router;
