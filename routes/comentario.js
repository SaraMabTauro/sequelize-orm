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

router.delete('/comentario/:fecha/:idPublicacion',(req,res)=>{
  const {fecha,idPublicacion}=req.params
  try {
    const comentarioE=comentarioSchema.destroy({
      where:{
        fechaCreacion:fecha,
        publicacionId:idPublicacion
      }
    })
    if (comentarioE === 0) {
      return res.status(404).json({ message: 'No se encontraron comentarios para eliminar' }); 
    }
    return res.json({ message: 'Comentario eliminado' }); 

  } catch (error) {
    console.error('Error al eliminar el comentario:', error);
    return res.status(500).json({ error: 'Error al eliminar el comentario' });
  }
})


module.exports = router;
