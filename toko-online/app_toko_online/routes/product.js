var express = require('express');
var router = express.Router();
var products = require("../../data/products.json");

router.get('/:productId/review/:reviewId', function(req, res, next) {
    const productId = req.params.productId;
    const reviewId = req.params.reviewId;

    res.render('review-detail', {
        title: `Ulasan ${reviewId} untuk Produk ${productId}`, 
        productId: productId,
        reviewId: reviewId
    });
});

router.get("/:id",function(req,res,next){
    const productId = parseInt(req.params.id);//tangkap id dari url
    const product = products.find(p => p.id === productId);//cari product by id

    if(!product){// jika produk tidak ditemukan
        return res.status(404).send('product tidak ditemukan!');
    }

    res.render('product-detail',
        {
            title : product.name,
            product : product
        }
    );
});
module.exports = router;