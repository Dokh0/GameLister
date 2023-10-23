 const router = require('express').Router()


//importar archivos rutas y las almacenamos en las variables
// const contact_infoRouter = require('./contact_info.router')
// const commentRouter = require('./comment.router')

//definir rutas almacenadas en las variables
// router.use('/contact_info', contact_infoRouter)
// router.use('/comment', commentRouter)

//definir rutas directamente
router.use('/contact_info', require ('./contact_info.router'))
router.use('/comment', require('./comment.router'))


//exportar modulo
module.exports = router 