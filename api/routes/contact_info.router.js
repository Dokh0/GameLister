const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')

const { getAllContact_info, getOneContact_info, createContact_info, updateContact_info, deleteContact_info } = require('../controllers/contact_info.controller')

router.get('/', checkAuth, checkAdmin, getAllContact_info)
router.get('/:id', checkAuth, getOneContact_info)
router.post('/', checkAuth, checkAdmin, createContact_info)
router.put('/:id', checkAuth, updateContact_info)
router.delete('/:id', checkAuth, deleteContact_info)

module.exports = router
