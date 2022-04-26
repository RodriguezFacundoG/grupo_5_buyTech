const sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncremental: true,
      primaryKey: true,
    },
    categories_name: {
      type: DataTypes.STRING,      
    }    
  };

  const config = {
    tableName: 'categories',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false, //Si no tengo timestamps
  };

  const Category = sequelize.define("Category", cols, config);
  return Category;

};