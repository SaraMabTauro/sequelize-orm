const sequelize = require('../connection/connect');

const Usuario = sequelize.define('Usuario', {
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },

    nombre:{
        type: sequelize.STRING,
    },

    email:{
        type: sequelize.STRING,
    },

});

module.exports = Usuario;