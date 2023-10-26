const Comentario = require('../models/comentario');

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
};
