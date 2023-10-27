const Comentario = require('../models/comentario');

const agregarComentario = async (req, res) => {

  try {

    const { contenido, fechaCreacion, publicacionId } = req.body;

    const nuevoComentario = await comentarioSchema.create({ contenido, fechaCreacion, publicacionId });

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

module.exports = {
  buscarComentariosPorPublicacion,
  agregarComentario
};
