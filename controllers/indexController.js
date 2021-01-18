const productos = require('../data/productsDataBase')

module.exports = {
    index:(req,res) =>{
        
        res.render('home',{
            productos
        })
    },
    detalles:(req,res) =>{
        let producto = productos.find(producto =>{
            return producto.id == req.params.id
        })
        res.render('detalles',{
            productos,producto
        })
    }
}