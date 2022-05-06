const sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncremental: true,
      primaryKey: true,
    },
    admin: {
      type: DataTypes.BOOLEAN,      
    }    
  };

  const config = {
    tableName: 'user_categories',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false, //Si no tengo timestamps
  };

  const User_category = sequelize.define("User_category", cols, config);
  return User_category;

};