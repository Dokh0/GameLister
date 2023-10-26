const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')

const { getAllComment, getOneComment, createComment, updateComment, deleteComment, getOneCommentByGame, postOneCommentByGame } = require('../controllers/comment.controller')

router.get('/', checkAuth, getAllComment)
router.get('/gamecomment', checkAuth, checkAdmin, getOneCommentByGame)
router.get('/:id', checkAuth, getOneComment)

router.post('/createComment/:catalogueId', checkAuth, postOneCommentByGame)
router.post('/', checkAuth, createComment)

router.put('/:id', checkAuth, updateComment)

router.delete('/:id', checkAuth, checkAdmin, deleteComment)



module.exports = router
