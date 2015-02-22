var express = require('express');
var router = express.Router();
var services = require('../lib/services');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var testimonials = services.getTestimonials();
  res.json(testimonials);
});

module.exports = router;
