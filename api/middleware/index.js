const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

function checkAuth(req, res, next) {
    if (!req.headers.authorization) return res.status(401).send('Token not found')

    jwt.verify(req.headers.authorization, process.env.SECRET, async (err, result) => {
        if (err) return res.status(401).send('Token not valid')

        const user = await User.findOne({ where: { email: result.email }})
        if(!user) return res.status(401).send('User not found')

        res.locals.user = user

        next()
    })
}

function checkAdmin(req, res, next) {
    if(res.locals.user.role !== 'admin') {
        return res.status(401).send('User not authorized')
    } else {
        next()
    }
}

module.exports = { checkAuth, checkAdmin }