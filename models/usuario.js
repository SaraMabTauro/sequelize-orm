const { sequelize } = require('../connection/connect');
const {Sequelize} = require('sequelize')

const Usuario = sequelize.define('Usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    nombre: {
        type: Sequelize.STRING,
    },

    email: {
        type: Sequelize.STRING, 
    },

});

Usuario.sync()
    .then(() => {
        console.log('Modelo de Usuario sincronizado con la base de datos');
    })
    .catch((error) => {
        console.error('Error al sincronizar el modelo de Usuario:', error);
    });

module.exports = Usuario;