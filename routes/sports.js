var express = require('express');
var router = express.Router();

/* GET sports page. */

router.get('/sports', function(req, res, next) {
  res.render('sports');
});
