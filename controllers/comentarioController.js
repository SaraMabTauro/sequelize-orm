const Comentario = require('../models/comentario');

const agregarComentario = async (req, res) => {

  try {

    const { contenido, fechaCreacion, publicacionId } = req.body;

    const nuevoComentario = await Comentario.create({ contenido, fechaCreacion, publicacionId });

    res.status(201).json({ comentario: nuevoComentario });

  } catch (error) {

    console.error('Error al agregar un comentario:', error);

    res.status(500).json({ error: 'Error al agregar un comentario' });

  }

}


const deleteCommentsbyDate = (req, res) => {

  const fecha=new Date(req.params.fecha)
  const idPublicacion=req.params.idPublicacion
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
    return res.json({message:"eliminado" }); 

  } catch (error) {
    console.error('Error al eliminar el comentario:', error);
    return res.status(500).json({ error: 'Error al eliminar el comentario' });
  }
}

const buscarComentariosPorPublicacion = async (req, res) => {
  try {
    const comentarios = await Comentario.findAll({
      where: { publicacionId: req.params.publicacionId }, 
      include: [Publicacion] // Aca se incluye la relación con el modelo de Publicación para obtener los detalles de la publicación ojito :)
    });
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  buscarComentariosPorPublicacion,
  agregarComentario,
  deleteCommentsbyDate
};
