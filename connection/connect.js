const { Sequelize } = require('sequelize');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

const sequelize = new Sequelize(DB_URL, {
  dialect: 'mysql', 
  define: {
    timestamps: false,
  },
});

const connectToDatabase = async () => {
  try {

    await sequelize.authenticate();

    console.log('Conexion completada');

  } catch (error) {

    console.error('Error al conectar con la base de datos:', error);

  }
};

module.exports = {
  sequelize,
  connectToDatabase,
};
