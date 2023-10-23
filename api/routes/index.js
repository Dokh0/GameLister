 const router = require('express').Router()


//importar archivos rutas
const contact_infoRouter = require('./contact_info.router')

//definir rutas
router.use('/contact_info', contact_infoRouter)


//exportar modulo
module.exports = router 