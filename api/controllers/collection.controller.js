const Collection = require('../models/collection.model')
const Catalogue = require('../models/catalogue.model')

async function getOneCollection(req, res) {
    console.log({ body: req.body, params: req.params, query: req.query })  
    try {
        const collection = await Collection.findByPk(req.params.id)
        if (!collection) { res.status(500).send('Collection not found') }
        res.status(200).json(collection)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getAllCollections(req, res) {
    try {
        const collections = await Collection.findAll()
        res.status(200).json(collections)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createCollection(req, res) {
    console.log(req.body)
    try {
        const collection = await Collection.create(req.body)
        res.status(200).send('Collection created')

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateCollection(req, res) {
    try {
        const [collection] = await Collection.update(req.body, {
            where: { id: req.params.id },
        })
        res.status(200).json(collection)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateGameCollection(req, res) {
    try {
        const collection = await Collection.findByPk(req.params.id)
        const catalogue = await Catalogue.findByPk(req.body.catalogueId)

        await collection.addCatalogue(catalogue)
        res.status(200).json(collection)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteCollection(req, res) {
    try {
        const collection = await Collection.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({ message: 'Collection deleted', collection: collection })
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getOneCollection, getAllCollections, createCollection, updateCollection, deleteCollection, updateGameCollection }