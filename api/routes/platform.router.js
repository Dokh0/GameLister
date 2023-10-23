const router = require('express').Router()

const { getAllPlatforms, getOnePlatform, createPlatform, updatePlatform, deletePlatform } = require('../controllers/platform.controller')
const { checkAuth, checkAdmin }= require('../middleware/index')

router.get('/', getAllPlatforms)
router.get('/:id', getOnePlatform)
router.post('/', checkAuth, checkAdmin, createPlatform)
router.put('/:id', checkAuth, checkAdmin, updatePlatform)
router.put('/:id', checkAuth, checkAdmin, deletePlatform)


module.exports = router