var products = require('../../data/products.json');

const index = (req, res) =>{
    res.render('index',{
        title: 'Toko online junatech',
        products:products
    });
};

module.exports={index};