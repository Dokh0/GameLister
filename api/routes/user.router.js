const router = require('express').Router()

const { getAllUser, getOneUser, getProfile, updateUser, deleteUser } = require('../controllers/user.controller')
const { checkAuth, checkAdmin }= require('../middleware/index')

router.get('/', checkAuth, checkAdmin, getAllUser)
router.get('/profile', checkAuth, getProfile)
router.get('/:id', checkAuth, checkAdmin, getOneUser)
router.put('/:id', checkAuth, updateUser)
router.delete('/:id', checkAuth, deleteUser)


module.exports = router