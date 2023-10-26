const Comment = require('../models/comment.model')
const Catalogue = require('../models/catalogue.model')
const User = require('../models/user.model')

async function getAllComment(req, res) {
    try {
        const comment = await Comment.findAll({
            where: req.query
        } )
        if (comment) {
            return res.status(200).json(comment)
        } else {
            return res.status(404).send('Comment not found')
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

async function getOneCommentByGame(req, res) {
    
    try {
        
        const game = await Catalogue.findOne({
            where: req.query,
            include: Comment
        })
        console.log(game)
        if (game) {
            return res.status(200).json(game.comments)
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

async function postOneCommentByGame(req, res) {
    try {
        const game = await Catalogue.findByPk(req.params.catalogueId)
        const user = await User.findByPk(res.locals.user.id)
        const comment = await Comment.create({
            comment: req.body.comment
        })
        await user.addComment(comment)
        await game.addComment(comment)
        const result = await Catalogue.findByPk(req.params.catalogueId, {
            include: Comment
        })
        if (result) {
            return res.status(200).json(result)
        } else {
            return res.status(404).send('Comment not found')
        }
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
    getOneCommentByGame,
    postOneCommentByGame
}