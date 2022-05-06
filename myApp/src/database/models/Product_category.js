const sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncremental: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,      
    }    
  };

  const config = {
    tableName: 'product_categories',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false, //Si no tengo timestamps
  };

  const Product_category = sequelize.define("Product_category", cols, config);
  return Product_category;

};