var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('index');
});

router.get('/sports', function(req, res, next) {
  res.render('sports');
});

router.get('/fashionista', function(req, res, next) {
  res.render('fashionista');
});

router.get('/mindfulness', function(req, res, next) {
  res.render('mindfulness');
});

router.get('/groceries', function(req, res, next) {
  res.render('groceries');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/cooking', function(req, res, next) {
  res.render('cooking');
});

module.exports = router;
