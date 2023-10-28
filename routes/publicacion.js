const express = require('express');
const router = express.Router();
const {publicacionController, agregarPublicaciones,  deletePublicationByDate} = require('../controllers/publicacionController'); 
const publicacionSchema = require('../models/publicacion')

router.post('/publicaciones', agregarPublicaciones);

router.get('/buscarPorUsuario/:usuarioId', async (req, res) => {

  const usuarioId = req.params.usuarioId;

  try {
    const publicaciones = await publicacionController.buscarPublicacionesPorUsuario(usuarioId);

    if (publicaciones) {

      res.json(publicaciones);

    } else {

      res.status(404).json({ error: 'No se encontraron publicaciones para el usuario' });

    }
  } catch (error) {

    console.error('Error al buscar publicaciones por usuario:', error);

    res.status(500).json({ error: 'Error al buscar publicaciones' });
  }
  
});


router.delete('/publicaciones/:fechaCreacion', deletePublicationByDate);



module.exports = router;
