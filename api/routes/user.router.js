const router = require('express').Router()

const { getAllUser, getOneUser, getProfile, updateUser, deleteUser } = require('../controllers/user.controller')
const { checkAuth, checkAdmin }= require('../middleware/index')

router.get('/', checkAuth, checkAdmin, getAllUser)
router.get('/:id', checkAuth, checkAdmin, getOneUser)
router.get('/:id', checkAuth, getProfile)
// router.post('/', createUser)
router.put('/:id', checkAuth, updateUser)
router.put('/:id', checkAuth, deleteUser)


module.exports = router