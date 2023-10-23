const router = require('express').Router()

const { getAllPlatforms, getOnePlatform, createPlatform, updatePlatform, deletePlatform } = require('../controllers/platform.controller')

router.get('/', getAllPlatforms)
router.get('/:id', getOnePlatform)
router.post('/', createPlatform)
router.put('/:id', updatePlatform)
router.put('/:id', deletePlatform)


module.exports = router