const Contact_info = require('../models/contact_info.model')
const User = require('../models/user.model')

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

async function getOwmProfile(req, res) {
    try {
        const contact = await Contact_info.findOne({
            where: {
                userId: res.locals.user.id
            }
        })

        /*  Eager Loading 
        const user = await User.findByPk(res.loclas.user.id,{
            include: Contact_info
        }) */  

        if (contact) {
            return res.status(200).json(contact)
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
            phone: req.body.phone,
            address: req.body.address
        })
        return res.status(200).json({ message: 'Contact_info created', contact_info: contact_info })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function addContact_info_user(req, res) {
    console.log(req.params)
    const contact_info = await Contact_info.findByPk(req.params.contact_infoId)
    const user = await User.findByPk(req.params.userId)

    try {
       await contact_info.setUser(user)
        return res.status(200).json({ message: 'Contact_info for user added', contact_info: contact_info })
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
    addContact_info_user,
    getOwmProfile,
}