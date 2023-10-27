const {sequelize} = require('../connection/connect');
const Publicacion = require('./publicacion');
const { Sequelize } = require('sequelize')

const Comentario = sequelize.define('Comentario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    contenido: {
        type: Sequelize.TEXT,
    },

    fechaCreacion: {
        type: Sequelize.DATE,
    },

    publicacionId: {
        type: Sequelize.INTEGER,
        references: {
            model: Publicacion,
            key: 'id',
        },
    },
});

module.exports = Comentario;