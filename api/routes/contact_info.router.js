const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')

const { getAllContact_info, getOneContact_info, createContact_info, updateContact_info, deleteContact_info, addContact_info_user, getOwmProfile } = require('../controllers/contact_info.controller')

router.get('/', checkAuth, checkAdmin, getAllContact_info)// crud
router.get('/user',checkAuth, getOwmProfile)// especial
router.get('/:id', checkAuth, checkAdmin, getOneContact_info)//crud
router.post('/', checkAuth, createContact_info)// crud
router.put('/addinfo_user', checkAuth, addContact_info_user)// especial
router.put('/:id', checkAuth, checkAdmin, updateContact_info) // crud
router.delete('/:id', checkAuth, checkAdmin, deleteContact_info) // crud

module.exports = router
