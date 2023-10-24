const User = require('../models/user.model')
const Catalogue = require('../models/catalogue.model')

async function getAllUserCatalogue(req, res) {
    try {
        const userCatalogue = await User_catalogue.findAll()
        if (userCatalogue) {
            return res.status(200).json(userCatalogue)
        } else {
            return res.status(404).send('No permissions allowed')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function addUserCatalogue(req, res) {
    try {
        const user = await User.findByPk(res.locals.user.id)
        const my_catalogue = await Catalogue.findByPk(req.params.catalogueId)
        console.log(my_catalogue)
        await user.addCatalogue(my_catalogue, {through: req.body})
        
        res.status(200).json(my_catalogue)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneMyCatalogue(req, res) {
    try {
        const my_catalogue = await User_catalogue.findByPk(req.params.id)
        if (my_catalogue) {
            return res.status(200).json(my_catalogue)
        } else {
            return res.status(404).send('Game not found in your catalogue')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function adminAddUserCatalogue(req, res) {
    try {
        if (res.locals.user.role === 'admin') {
            const user = await User.findByPk(req.body.userId)
            const my_catalogue = await Catalogue.findByPk(req.body.catalogueId)
            await user.addCatalogue(my_catalogue, {through: req.body})
            res.status(200).json(my_catalogue) 
        } else {
            return res.status(404).send("No permissions allowed ")
        }
        
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = {
    getAllUserCatalogue,
    addUserCatalogue,
    getOneMyCatalogue, 
    adminAddUserCatalogue
}