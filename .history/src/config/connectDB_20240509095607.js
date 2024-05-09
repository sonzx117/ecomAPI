const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('b2mi3c2lov4kd7whqqpu', 'ui4fttctirlfxvyo', 'yhjCfJV7dRNAGvk1qASU', {
  host: 'b2mi3c2lov4kd7whqqpu-mysql.services.clever-cloud.com',
  dialect: 'mysql',
  logging: false,
  port: 3306, 
  dialectOptions: { 
      socketPath: "/opt/lampp/var/mysql/mysql.sock"
  },

});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = connectDB;
