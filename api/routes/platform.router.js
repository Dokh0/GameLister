const router = require('express').Router()

const { getAllPlatforms, getOnePlatform, getplatformCatalogue, getAllPlatformYear, createPlatform, updatePlatform, deletePlatform, addGamePlatform } = require('../controllers/platform.controller')
const { checkAuth, checkAdmin }= require('../middleware/index')

router.get('/', getAllPlatforms)
router.get('/:id', getOnePlatform)
router.get('/:id/catalogue', getplatformCatalogue)
router.get('/year', getAllPlatformYear)

router.post('/', checkAuth, checkAdmin, createPlatform)
router.post('/catalogue', checkAuth, checkAdmin, addGamePlatform)
router.put('/:id', checkAuth, checkAdmin, updatePlatform)
router.delete('/:id', checkAuth, checkAdmin, deletePlatform)


module.exports = router