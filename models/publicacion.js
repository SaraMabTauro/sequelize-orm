const {sequelize} = require('../connection/connect')
const Usuario = require('./usuario');
const {Sequelize} = require('sequelize');



const Publicacion = sequelize.define('Publicacion', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    titulo:{
        type: Sequelize.STRING,
    },

    contenido:{
        type: Sequelize.TEXT,
    },

    fechaCreacion:{
        type: Sequelize.DATE,
    },

    usuarioId:{
        type: Sequelize.INTEGER,
        references:{
            model: Usuario,
            key: "id",
        },
    },
});

module.exports = Publicacion;