const productos = require('../data/productsDataBase')

module.exports = {
    index:(req,res) =>{
        
        res.render('home',{
            productos
        })
    }
}