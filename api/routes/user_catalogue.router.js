const router = require('express').Router()

const { getAllUserCatalogue, addUserCatalogue, getOneMyCatalogue, adminAddUserCatalogue, deleteOneMyCatalogue, getMyUserCatalogue } = require('../controllers/user_catalogue.controller')
const { checkAuth, checkAdmin }= require('../middleware/index')

router.get('/all', checkAuth, checkAdmin, getAllUserCatalogue)
router.get('/', checkAuth, getMyUserCatalogue)
router.get('/:id', checkAuth, getOneMyCatalogue)
router.post('/', checkAuth, checkAdmin, adminAddUserCatalogue)
router.post('/:catalogueId', checkAuth, addUserCatalogue)
router.delete('/:catalogueId', checkAuth, deleteOneMyCatalogue)


module.exports = router