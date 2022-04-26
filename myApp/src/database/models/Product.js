const sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncremental: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,      
    },
    name: {
      type: DataTypes.STRING,      
    },
    description: {
      type: DataTypes.STRING,      
    },
    weight: {
      type: DataTypes.TINYINT,
    },
    color: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,     
    },
    price: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.TINYINT,
    },
    picture: {
      type: DataTypes.STRING,
    }
  };

  const config = {
    tableName: 'products',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false, //Si no tengo timestamps
  };

  const Product = sequelize.define("Product", cols, config);
  return Product;

};