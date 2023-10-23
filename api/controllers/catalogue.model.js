const Catalogue = require('../models/catalogue.model')

async function getOneCatalogue(req, res) {
    console.log({ body: req.body, params: req.params, query: req.query })  //consultar lo que nos llega en la request
    try {
        const catalogue = await Catalogue.findByPk(req.params.id)
        if (!catalogue) { res.status(500).send("Catalogue not found") }
        res.status(200).json(catalogue)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getAllCatalogues(req, res) {
    try {
        const catalogues = await Catalogue.findAll()
        res.status(200).json(catalogues)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createCatalogue(req, res) {
    console.log(req.body)
    try {
        const catalogue = await Catalogue.create(req.body)
        res.status(200).send("Catalogue created")

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateCatalogue(req, res) {
    try {
        const [catalogue] = await Catalogue.update(req.body, {
            where: { id: req.params.id },
        })
        res.status(200).json(catalogue)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteCatalogue(req, res) {
    try {
        const catalogue = await Catalogue.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({ text: "Catalogue deleted", catalogue: catalogue })
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getOneCatalogue, getAllCatalogues, createCatalogue, updateCatalogue, deleteCatalogue }