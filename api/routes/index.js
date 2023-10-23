const router = require('express').Router()

const userRouter = require('./user.router')
const platformRouter = require('./platform.router')
const authRouter = require('./auth.router')

//importar archivos rutas

const catalogueRouter = require('./catalogue.router')
const collectionRouter = require('./collection.router')

//definir rutas
//router.user('./user', userRouter)


module.exports = router