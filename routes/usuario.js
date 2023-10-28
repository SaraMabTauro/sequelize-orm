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

router.delete('/usuarios/:idUsuario',(req,res)=>{
  const {idUsuario}=req.params;
  try {
    const usuario= Usuario.destroy({
      where:{
        id:idUsuario
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
})



module.exports = router;
