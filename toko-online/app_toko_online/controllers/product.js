var products = require('../../data/products.json');
var Product=require("../models/products");
const index = async(req, res) => {
    try{
        //gunakan find({})
        //untuk mengambil seluruh data dari collection
        const prod = await Product.find({});
        res.render('index',{
            title: 'Toko Online Sederhana - ini dari mongo DB',
            products:prod
        });
    }catch(err){
        res.status(500).send("Gagal memuat produk");
    }
};

const detail = async(req, res)=>{
    try{
        const productId = req.params.id;
        const product = await Product.findById(productId);
        
        if(!product){
            return res.status(404).send('product tidak ditemukan');
        }
    res.render('product-detail',
        {
            title:product.name,
            product:product
        }
    );
}catch(err){
    res.status(500).send("gagal memuat detail produk");
}
};

const apiall = async(req, res) =>{
    try{
        const prod = await Product.find({});
        res.status(200).json(
            {
                status:true,
                message:"data produk berhasil diambil",
                data:prod
            });
    }catch(err){
        res.status(500).json({
            status : false,
            message:"gagal memuat produk"
        });
    }
};

module.exports={index,detail};