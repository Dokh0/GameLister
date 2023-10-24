const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')

const { getAllContact_info, getOneContact_info, createContact_info, updateContact_info, deleteContact_info, addContact_info_user, getOwmProfile } = require('../controllers/contact_info.controller')

router.get('/', checkAuth, checkAdmin, getAllContact_info)//ok
router.get('/user',checkAuth , getOwmProfile)//ok
router.get('/:id', checkAuth, getOneContact_info)//ok
router.post('/', checkAuth, checkAdmin, createContact_info)//ok
router.put('/:contact_infoId/:userId', checkAuth, addContact_info_user)//
router.put('/:id', checkAuth, updateContact_info)
router.delete('/:id', checkAuth, deleteContact_info)

module.exports = router
