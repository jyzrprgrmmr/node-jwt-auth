const sequelize = require('../config/db');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = sequelize.define('users' , 
{
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    firstname:{
        type: Sequelize.STRING,
        allowNull:false
    },
    lastname:{
        type: Sequelize.STRING,
        allowNull:false
    },
    gender:{
        type:Sequelize.STRING,
        allowNull:false
    },
    role:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique: true,
        allowNull:false
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false
    }
},
{
  hooks: {
    beforeCreate: (user) => {
      return bcrypt.hash(user.password, 10)
          .then(hash => {
              user.password = hash;
          })
          .catch(err => {
              throw new Error();
          });
    }
  }
}
);