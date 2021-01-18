const express = require('express')
const router = express.Router() //requiero el metodo Router

const indexController = require('../controllers/indexController');

router.get('/',indexController.index)
router.get('/detalles/:id/:category',indexController.detalles)

module.exports = router