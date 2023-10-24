const router = require('express').Router()

const { getAllUserCatalogue, addUserCatalogue, getOneMyCatalogue, adminAddUserCatalogue } = require('../controllers/user_catalogue.controller')
const { checkAuth, checkAdmin }= require('../middleware/index')

router.get('/', checkAuth, getAllUserCatalogue)
router.get('/:id', checkAuth, getOneMyCatalogue)
router.post('/', checkAuth, checkAdmin, adminAddUserCatalogue)
router.post('/:catalogueId', checkAuth, addUserCatalogue)



module.exports = router