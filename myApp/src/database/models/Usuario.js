const sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncremental: true,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING,      
    },
    password: {
      type: DataTypes.STRING,
    },
    avatar_photo: {
      type: DataTypes.STRING,
    }
  };

  const config = {
    tableName: 'users',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false, //Si no tengo timestamps
  };

  const User = sequelize.define("User", cols, config);
  return User;

};