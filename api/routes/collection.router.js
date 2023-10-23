const router = require('express').Router()

const { getAllCollections, getOneCollection, createCollection, updateCollection, updateGameCollection, deleteCollection } = require('../controllers/collection.model')

router.get('/', getAllCollections)
router.get('/:id', getOneCollection)
router.post('/', createCollection)
router.put('/:id', updateGameCollection)
router.put('/:id', updateCollection)
router.delete('/:id', deleteCollection)

module.exports = router