 const router = require('express').Router()


//importar archivos rutas

const catalogueRouter = require('./catalogue.router')
const collectionRouter = require('./collection.router')

//definir rutas
//router.user('./user', userRouter)
router.use('/catalogue', catalogueRouter)
router.use('/collection', collectionRouter)


//exportar modulo
module.exports = router