const User = require('../models/user.model')


async function getAllUser(req, res) {
    try {
        const user = await User.findAll()
        console.log(user)
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).send('No permissions allowed')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id)
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getProfile(req, res) {
    console.log(res.locals.user)
    try {
        const user = await User.findByPk(res.locals.user.id)
        if (!user) { res.status(500).send('User not found') }
        res.status(200).json(user)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateUser(req, res) {
    try {
        const [userExist, user] = await User.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (userExist !== 0) {
            return res.status(200).json({ message: 'User updated' })
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (user) {
            return res.status(200).json('User deleted')
        } else {
            return res.status(404).send('User not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = {
    getAllUser,
    getOneUser,
    getProfile,
    updateUser,
    deleteUser
}