const router = require('express').Router()


//importar archivos rutas
const userRouter = require('./user.router')

//definir rutas
router.user('./user', userRouter)


//exportar modulo
module.exports = router 