const express = require('express');
const router = express.Router();
const {usuarioController, agregarUsuario} = require('../controllers/usuarioController'); 
const Usuario = require('../models/usuario');

router.post('/usuarios', agregarUsuario);


router.get('/buscarPorEmail/:email', async (req, res) => {
  const email = req.params.email;

  try {
    const usuario = await usuarioController.buscarUsuarioPorEmail(email);

    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al buscar usuario por email:', error);
    res.status(500).json({ error: 'Error al buscar usuario' });
  }
});



module.exports = router;
