const router = require('express').Router()

const userRouter = require('./user.router')
const platformRouter = require('./platform.router')
const authRouter = require('./auth.router')

//importar archivos rutas

const catalogueRouter = require('./catalogue.router')
const collectionRouter = require('./collection.router')
const contact_infoRouter = require('./contact_info.router')
//importar archivos rutas y las almacenamos en las variables
// const contact_infoRouter = require('./contact_info.router')
// const commentRouter = require('./comment.router')

//definir rutas almacenadas en las variables
// router.use('/contact_info', contact_infoRouter)
// router.use('/comment', commentRouter)

//definir rutas directamente
router.use('/contact_info', require ('./contact_info.router'))
router.use('/comment', require('./comment.router'))


module.exports = router