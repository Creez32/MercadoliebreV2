const productos = require('../data/productsDataBase')


module.exports={
    autos:(req,res) =>{
        res.render('autos');
    },
    detalle:(req,res) =>{
        let producto = productos.find(producto =>{
            return producto.id == req.params.id
        })
        res.render('detalles',{
            producto
        })
    }
}