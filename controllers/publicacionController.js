const Publicacion = require('../models/publicacion');

async function buscarPublicacionesPorUsuario(usuarioId) {
  try {
    const publicaciones = await Publicacion.findAll({
      where: { UsuarioId: usuarioId },
    });
    return publicaciones;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  buscarPublicacionesPorUsuario,
};
