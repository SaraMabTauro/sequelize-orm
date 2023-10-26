const Usuario = require('../models/usuario');

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

module.exports = {
  buscarUsuarioPorEmail,
};