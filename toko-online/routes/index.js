var express = require('express');
var router = express.Router();
var products = require('../data/products.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'toko online sederhada',products:products });
});

router.get('/search', function(req, res, next) {
  const q = req.query.q ? req.query.q.toLowerCase() : ""; // ambil query, default ""
  
  let filteredProducts = products;

  if (q) {
    filteredProducts = products.filter(p => 
      p.name.toLowerCase().includes(q)
    );
  }

  res.render('index', { 
    title: q ? `Hasil Pencarian untuk "${req.query.q}"` : 'Toko Online Sederhana',
    products: filteredProducts,
    query: req.query.q || ""
  });
});

module.exports = router;
