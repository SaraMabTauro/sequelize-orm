const Usuario = require('../models/usuario');

const agregarUsuario = async (req, res) => {

  try {

    const { nombre, email } = req.body;

    const nuevoUsuario = await Usuario.create({ nombre, email });

    res.status(201).json({ usuario: nuevoUsuario });

  } catch (error) {

    console.error('Error al agregar un usuario:', error);
    res.status(500).json({ error: 'Error al agregar un usuario' });

  }
}

async function buscarUsuarioPorEmail(email) {
  try {
    const usuario = await Usuario.findOne({
      where: { email: email },
    });
    return usuario;
  } catch (error) {
    throw error;
  }
}

const deleteUsers = (req, res) => {

  const { idUsuario } = req.params;

  try {

    const usuario = Usuario.destroy({
      where: {
        id: idUsuario
      }
    })
    if (usuario === 0) {

      return res.status(404).json({ message: 'No se encontraron publicaciones para eliminar' });

    }

    return res.json({ message: 'Usuario eliminado exitosamente' });

  } catch (error) {

    console.error('Error al eliminar el usuario:', error);
    return res.status(500).json({ error: 'Error al eliminar el usuario' });

  }
}

module.exports = {
  buscarUsuarioPorEmail,
  agregarUsuario,
  deleteUsers
};