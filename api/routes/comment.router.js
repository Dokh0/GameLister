const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')

const { getAllComment, getOneComment, createComment, updateComment, deleteComment, getOneCommentbyGame } = require('../controllers/comment.controller')

router.get('/', checkAuth, getAllComment)//todos pueden ver todos los comentarios
router.get('/gamecomment', checkAuth, checkAdmin, getOneCommentbyGame)//el comentario de un juego especifico
router.get('/:id', checkAuth, getOneComment)
router.post('/', checkAuth, createComment)//todos pueden crear comentarios
router.put('/:id', checkAuth, updateComment)//todos pueden modificar comentarios
router.delete('/:id', checkAuth, checkAdmin, deleteComment)//solo el admin puede borrar comentarios



module.exports = router
