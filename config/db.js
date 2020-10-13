const Sequelize = require('sequelize');

const sequelize = new Sequelize('fullstack','root','jyzrprgrmmr', 
    {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: 0,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        }
    },
)

module.exports = sequelize;
global.sequelize = sequelize;
