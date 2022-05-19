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
      type: DataTypes.INTEGER.UNSIGNED,
    },
    weight: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true   
    },
    price: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    discount: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING,
    },
    product_category_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true
    },    
  };

  const config = {
    tableName: 'products',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false, //Si no tengo timestamps
  };

  const Product = sequelize.define("Product", cols, config);
  Product.associate = (models) => {
    Product.belongsTo(models.Product_category, {
      as: 'product_category',
      foreignKey: 'product_category_id'
    }),
    
    Product.hasMany(models.Item,{
      as: "items",      
      foreignKey: "product_id"
    })
  };
  return Product;

};