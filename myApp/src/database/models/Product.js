const sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncremental: true,
      primaryKey: true,
    },   
    name: {
      type: DataTypes.STRING,      
    },
    description: {
      type: DataTypes.STRING,      
    },
    stock: {
      type: DataTypes.TINYINT.UNSIGNED,
    },
    weight: {
      type: DataTypes.TINYINT.UNSIGNED,
    },
    color: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,     
    },
    price: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    discount: {
      type: DataTypes.TINYINT.UNSIGNED,
    },
    picture: {
      type: DataTypes.STRING,
    },
    product_category_id: {
        type: DataTypes.BIGINT.UNSIGNED
    },
    cart_id: {
        type: DataTypes.BIGINT.UNSIGNED
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