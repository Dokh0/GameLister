const router = require('express').Router()

const { getAllUser, getOneUser, getProfile, createUser, updateUser, deleteUser } = require('../controllers/user.controller')

router.get('/', getAllUser)
router.get('/:id', getOneUser)
router.get('/:id', getProfile)
router.post('/', createUser)
router.put('/:id', updateUser)
router.put('/:id', deleteUser)


module.exports = router