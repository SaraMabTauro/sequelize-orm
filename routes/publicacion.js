const express = require('express');
const router = express.Router();
const {publicacionController, agregarPublicaciones,  deletePublicationByDate, buscarPublicacionesPorUsuario} = require('../controllers/publicacionController'); 
const publicacionSchema = require('../models/publicacion')

router.post('/publicaciones', agregarPublicaciones);

router.get('/publicaciones/:usuarioId', buscarPublicacionesPorUsuario);

router.delete('/publicaciones/:fechaCreacion', deletePublicationByDate);



module.exports = router;
