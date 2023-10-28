const Publicacion = require('../models/publicacion');

const agregarPublicaciones = async (req, res) => {

  try {
    
    const { titulo, contenido, fechaCreacion, usuarioId } = req.body;

    const nuevaPublicacion = await Publicacion.create({ titulo, contenido, fechaCreacion, usuarioId });

    res.status(201).json({ publicacion: nuevaPublicacion });

  } catch (error) {

    console.error('Error al agregar una publicación:', error);
    res.status(500).json({ error: 'Error al agregar una publicación' });
  }
}

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
  agregarPublicaciones,
  
};
