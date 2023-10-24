const router = require('express').Router()

const userRouter = require('./user.router')
const platformRouter = require('./platform.router')
const authRouter = require('./auth.router')
const contact_infoRouter = require('./contact_info.router')
const commentRouter = require('./comment.router')
const catalogueRouter = require('./catalogue.router')
const collectionRouter = require('./collection.router')

router.use('/user', userRouter)
router.use('/contact_info', contact_infoRouter)
router.use('/comment', commentRouter)
router.use('/auth', authRouter)
router.use('/catalogue', catalogueRouter)
router.use('/platform', platformRouter)
router.use('/collection', collectionRouter)

module.exports = router