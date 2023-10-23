const router = require('express').Router()

const { getAllComment, getOneComment, createComment, updateComment, deleteComment } = require('../controllers/comment.controller')

router.get('/', getAllComment)
router.get('/:id', getOneComment)
router.post('/', createComment)
router.put('/:id', updateComment)
router.delete('/:id', deleteComment)

module.exports = router
