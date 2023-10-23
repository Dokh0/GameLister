const Comment = require('../models/comment.model')

async function getAllComment(req, res) {
    try {
        const comment = await Comment.findAll({ paranoid: false })
        if (comment) {
            return res.status(200).json(comment)
        } else {
            return res.status(404).send('No comment found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneComment(req, res) {
    try {
        const comment = await Comment.findByPk(req.params.id)
        if (comment) {
            return res.status(200).json(comment)
        } else {
            return res.status(404).send('Comment not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createComment(req, res) {
    try {
        const comment = await Comment.create({
            comment: req.body.comment
        })
        return res.status(200).json({ message: 'Comment created', comment: comment })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateComment(req, res) {
    try {
        const [commentExist, comment] = await Comment.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (commentExist !== 0) {
            return res.status(200).json({ message: 'Comment updated', comment: comment })
        } else {
            return res.status(404).send('Comment not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteComment(req, res) {
    try {
        const comment = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (comment) {
            return res.status(200).json('Comment deleted')
        } else {
            return res.status(404).send('Comment not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllComment,
    getOneComment,
    createComment,
    updateComment,
    deleteComment,
}