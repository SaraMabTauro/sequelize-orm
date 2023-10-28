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


const deletePublicationByDate = async (req, res) => {
  const { fechaCreacion } = req.params;
  try {
    const resultado = await Publicacion.destroy({
      where: {
        fechaCreacion: fechaCreacion
      }
    });

    if (resultado === 0) {
      return res.status(404).json({ message: 'No se encontraron publicaciones para eliminar' });
    }
    return res.json({ message: 'Publicación eliminada' });
  } catch (error) {
    console.error('Error al eliminar la publicación:', error);
    return res.status(500).json({ error: 'Error al eliminar la publicación' });
  }
}

const buscarPublicacionesPorUsuario = async (req, res) => {
  try {
    const publicaciones = await Publicacion.findAll({
      where: { usuarioId: req.params.usuarioId }, 
      include: [Usuario]
    });
    res.json(publicaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  buscarPublicacionesPorUsuario,
  agregarPublicaciones,
  deletePublicationByDate
};
