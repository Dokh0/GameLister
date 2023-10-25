const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')

const { getAllContact_info, getOneContact_info, createContact_info, updateContact_info, deleteContact_info, addContact_info_user, getOwmProfile } = require('../controllers/contact_info.controller')

router.get('/', checkAuth, checkAdmin, getAllContact_info)
router.get('/user',checkAuth, getOwmProfile)
router.get('/:id', checkAuth, checkAdmin, getOneContact_info)
router.post('/', checkAuth, checkAdmin, createContact_info)
router.put('/:contact_infoId/:userId', checkAuth, checkAdmin, addContact_info_user)
router.put('/:id', checkAuth, checkAdmin, updateContact_info) 
router.delete('/:id', checkAuth, checkAdmin, deleteContact_info) 

module.exports = router
