const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("mysql://root:123456@localhost:3306/Social_Media", {
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
