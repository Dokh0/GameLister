const router = require('express').Router()

const { getAllCatalogues, getOneCatalogue, createCatalogue, updateCatalogue, deleteCatalogue } = require('../controllers/catalogue.model')

router.get('/', getAllCatalogues)
router.get('/:id', getOneCatalogue)
router.post('/', createCatalogue)
router.put('/:id', updateCatalogue)
router.delete('/:id', deleteCatalogue)
 
module.exports = router