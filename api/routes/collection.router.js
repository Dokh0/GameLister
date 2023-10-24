const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')

const { getAllCollections, getOneCollection, createCollection, updateCollection, updateGameCollection, deleteCollection } = require('../controllers/collection.controller')

router.get('/', getAllCollections)
router.get('/:id', getOneCollection)
router.post('/', checkAuth, checkAdmin, createCollection)
router.put('/game/:id', checkAuth, checkAdmin, updateGameCollection)
router.put('/:id', checkAuth, checkAdmin, updateCollection)
router.delete('/:id', checkAuth, checkAdmin, deleteCollection)

module.exports = router