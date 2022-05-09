const sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncremental: true,
      primaryKey: true,
    },    
    qty: {
        type: DataTypes.INTEGER.UNSIGNED
    }, 
    total_price: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    user_id: {
        type: DataTypes.BIGINT.UNSIGNED
    }    
  };

  const config = {
    tableName: 'carts',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false, //Si no tengo timestamps
  };

  const Cart = sequelize.define("Cart", cols, config);
  Cart.associate = (models) => {    
    Cart.hasMany(models.Product,{
      as: "products",      
      foreignKey: "cart_id"
    }),
    Cart.belongsTo(models.User, {
      as: "user",
      foreignKey: "user_id"
    })
  };
  return Cart;

};