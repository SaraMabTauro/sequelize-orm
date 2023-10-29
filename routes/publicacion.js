const express = require('express');
const router = express.Router();
const {publicacionController, agregarPublicaciones} = require('../controllers/publicacionController'); 
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


router.delete('/publicaciones/:fechaCreacion', async (req, res) => {
  const  fechaCreacion  = new Date(req.params.fechaCreacion); 
  try {
    const resultado = await publicacionSchema.destroy({
      where: {
        fechaCreacion: fechaCreacion
      }
    });

    if (resultado === 0) {
      return res.status(404).json({ message: 'No se encontraron publicaciones para eliminar' }); 
    }
    return res.json({message:"eliminado" }); 
  } catch (error) {
    console.error('Error al eliminar la publicación:', error);
    return res.status(500).json({ error: 'Error al eliminar la publicación' });
  }
});



module.exports = router;
