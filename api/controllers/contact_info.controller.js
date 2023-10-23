const Contact_info = require('../models/contact_info.model')

async function getAllContact_info(req, res) {
    try {
        const contact_info = await Contact_info.findAll({ paranoid: false })
        if (contact_info) {
            return res.status(200).json(contact_info)
        } else {
            return res.status(404).send('No contact_info found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneContact_info(req, res) {
    try {
        const contact_info = await Contact_info.findByPk(req.params.id)
        if (contact_info) {
            return res.status(200).json(contact_info)
        } else {
            return res.status(404).send('Contact_info not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//lazyLoading
async function getOneContact_infoLazy(req, res) {
    try {
        const contact_info = await Contact_info.findByPk(req.params.id)
        const movie = await contact_info.getMovies();
        res.send({ contact_info, movie });//envia la respuesta al postman
        if (contact_info) {
            return res.status(200).json(contact_info)
        } else {
            return res.status(404).send('Contact_info not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//eagerLoading
async function getOneContact_infoEager(req, res) {
    try {
        const movie = await Movie.findByPk(req.params.id)
        const contact_info = await Contact_info.findByPk(req.params.id, {
            include: [{
                model: Movie,
                through: { attributes: [] }
            }]
        })


        if (contact_info) {
            return res.status(200).json(contact_info)
        } else {
            return res.status(404).send('Contact_info not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function createContact_info(req, res) {
    try {
        const contact_info = await Contact_info.create({
            firstName: req.body.firstName,
        })
        return res.status(200).json({ message: 'Contact_info created', contact_info: contact_info })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateContact_info(req, res) {
    try {
        const [contact_infoExist, contact_info] = await Contact_info.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (contact_infoExist !== 0) {
            return res.status(200).json({ message: 'Contact_info updated', contact_info: contact_info })
        } else {
            return res.status(404).send('Contact_info not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteContact_info(req, res) {
    try {
        const contact_info = await Contact_info.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (contact_info) {
            return res.status(200).json('Contact_info deleted')
        } else {
            return res.status(404).send('Contact_info not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllContact_info,
    getOneContact_info,
    createContact_info,
    updateContact_info,
    deleteContact_info,
    // getOneContact_infoLazy,
    // getOneContact_infoEager,
}