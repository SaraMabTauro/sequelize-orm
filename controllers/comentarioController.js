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

async function buscarComentariosPorPublicacion(publicacionId) {
  try {

    const comentarios = await Comentario.findAll({
      where: { PublicacionId: publicacionId },
    });

    return comentarios;

  } catch (error) {

    throw error;

  }
}


const deleteCommentsbyDate = (req, res) => {

  const { fecha, idPublicacion } = req.params

  try {

    const comentarioE = comentarioSchema.destroy({
      where: {
        fechaCreacion: fecha,
        publicacionId: idPublicacion
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
}

module.exports = {
  buscarComentariosPorPublicacion,
  agregarComentario,
  deleteCommentsbyDate
};
