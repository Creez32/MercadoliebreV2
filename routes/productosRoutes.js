const express = require('express')
const router = express.Router() //requiero el metodo Router

const productosController = require('../controllers/productosController');

router.get('/',productosController.autos)
router.get('/detalle/:id/:category',productosController.detalle)

module.exports = router