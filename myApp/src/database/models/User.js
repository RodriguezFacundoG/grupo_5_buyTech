const sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncremental: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,      
    },
    last_name: {
      type: DataTypes.STRING,      
    },
    email: {
      type: DataTypes.STRING,      
    },
    password: {
      type: DataTypes.STRING,
    },
    admin: {
      type: DataTypes.TINYINT,
      defaultValue: false,
    },
    avatar: {
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