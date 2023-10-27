const express = require('express');
const router = express.Router();
const {comentarioController, agregarComentario} = require('../controllers/comentarioController');
const comentarioSchema = require('../models/comentario')

router.post('/comentarios', agregarComentario);


router.get('/buscarPorPublicacion/:publicacionId', async (req, res) => {
  const publicacionId = req.params.publicacionId;

  try {
    const comentarios = await comentarioController.buscarComentariosPorPublicacion(publicacionId);

    if (comentarios) {

      res.json(comentarios);

    } else {

      res.status(404).json({ error: 'No se encontraron comentarios para la publicación' });

    }
  } catch (error) {

    console.error('Error al buscar comentarios por publicación:', error);

    res.status(500).json({ error: 'Error al buscar comentarios' });

  }
  
});


module.exports = router;
