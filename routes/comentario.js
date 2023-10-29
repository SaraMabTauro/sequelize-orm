const express = require('express');
const router = express.Router();
const {comentarioController, agregarComentario, deleteCommentsbyDate, buscarComentariosPorPublicacion} = require('../controllers/comentarioController');
const comentarioSchema = require('../models/comentario')

router.post('/comentarios', agregarComentario);


router.get('/comentarios/:publicacionId', buscarComentariosPorPublicacion);

router.delete('/comentario/:fecha/:idPublicacion', deleteCommentsbyDate)


module.exports = router;
