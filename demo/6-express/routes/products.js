var express = require('express');
var router = express.Router(); // création d'un router

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Produit accueil',});
});

// product/category avec la méthode get
router.get('/category', function(req, res, next) {
  res.render('index', { title: 'Category produit' });
});

router.delete('/', function(req, res, next) {
  res.render('index', { title: 'Suppression produit' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Création produit' });
});

module.exports = router;