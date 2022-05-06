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
  return Cart;

};