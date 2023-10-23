const router = require('express').Router()

const userRouter = require('./user.router')
const platformRouter = require('./platform.router')
const authRouter = require('./auth.router')

//importar archivos rutas

const catalogueRouter = require('./catalogue.router')
const collectionRouter = require('./collection.router')
const contact_infoRouter = require('./contact_info.router')

//definir rutas
router.use('/contact_info', contact_infoRouter)


module.exports = router