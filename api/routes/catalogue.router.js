const router = require('express').Router()

const { getAllCatalogue, getOneCatalogue, createCatalogue, updateCatalogue, deleteCatalogue } = require('../controllers/user.controller')

router.get('/', getAllCatalogues)
router.get('/:id', getOneCatalogue)
router.post('/', createCatalogue)
router.put('/:id', updateCatalogue)
router.delete('/:id', deleteCatalogue)
 
module.exports = router
