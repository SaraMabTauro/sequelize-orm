const express = require('express');
const router = express.Router();
const {usuarioController, agregarUsuario, deleteUsers, buscarUsuarioPorEmail} = require('../controllers/usuarioController'); 
const Usuario = require('../models/usuario');

router.post('/usuarios', agregarUsuario);

router.get('/usuarios/:email', buscarUsuarioPorEmail);

router.delete('/usuarios/:idUsuario', deleteUsers);



module.exports = router;
