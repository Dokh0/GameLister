const router = require('express').Router()

const { getAllContact_info, getOneContact_info, createContact_info, updateContact_info, deleteContact_info } = require('../controllers/contact_info.controller')

router.get('/', getAllContact_info)
router.get('/:id', getOneContact_info)
router.post('/', createContact_info)
router.put('/:id', updateContact_info)
router.delete('/:id', deleteContact_info)

module.exports = router
