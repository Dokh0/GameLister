const router = require('express').Router()

const userRouter = require('./user.router')
const platformRouter = require('./platform.router')
const authRouter = require('./auth.router')


router.use('/user', userRouter)
router.use('/platform', platformRouter)
router.use('/auth', authRouter)


module.exports = router