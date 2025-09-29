var products = require('../../data/products.json');

const index = (req, res) =>{
    res.render('index',{
        title: 'Toko online junatech',
        products:products,
        query: '' 
    });
};

const search = (req, res) => {
    const query = req.query.q ? req.query.q.toLowerCase() : '';

    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
    );

    res.render('index', {
        title: 'Hasil Pencarian',
        products: filteredProducts, 
        query: req.query.q 
    });
};

module.exports = {index, search};