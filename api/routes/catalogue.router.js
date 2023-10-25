const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')

const { getAllCatalogues, getOneCatalogue, createCatalogue, updateCatalogue, deleteCatalogue, getAllGamesGenre, getAllGamesYear } = require('../controllers/catalogue.controller')

router.get('/', getAllCatalogues)
router.get('/genre', getAllGamesGenre)
router.get('/year', getAllGamesYear)
router.get('/:id', getOneCatalogue)
router.post('/', checkAuth, checkAdmin, createCatalogue)
router.put('/:id', checkAuth, checkAdmin, updateCatalogue)
router.delete('/:id', checkAuth, checkAdmin, deleteCatalogue)
 
module.exports = router