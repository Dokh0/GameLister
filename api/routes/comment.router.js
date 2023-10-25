const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')

const { getAllComment, getOneComment, createComment, updateComment, deleteComment, getOneCommentbyGame } = require('../controllers/comment.controller')

router.get('/', getAllComment)
router.get('/gamecomment', getOneCommentbyGame)
router.get('/:id', getOneComment)
router.post('/', createComment)
router.put('/:id', updateComment)
router.delete('/:id', checkAuth, deleteComment)

module.exports = router
