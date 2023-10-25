const sequelize = require('../connection/connect');
const Publicacion = require('./publicacion');

const Comentario = sequelize.define ('Comentario', {
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    contenido:{
        type: sequelize.TEXT,
    },

    fechaCreacion:{
        type: sequelize.DATE,
    },

    publicacionId:{
        type: sequelize.INTEGER,
        references:{
            model: Publicacion,
            key: id,
        },
    },
});

module.exports = Comentario;