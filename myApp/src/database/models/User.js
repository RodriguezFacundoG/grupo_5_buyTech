const sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
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
    avatar: {
        type: DataTypes.STRING,
    },
    user_category_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        
    }
};

  const config = {
    tableName: 'users',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false, //Si no tengo timestamps
  };

  const User = sequelize.define("User", cols, config);
  User.associate = (models) => {
    User.belongsTo(models.User_category, {
      as: 'user_category',
      foreignKey: 'user_category_id'
    }),
    User.hasMany(models.Cart, {
      as:"carts",
      foreignKey:"user_id"
    })
  };
  return User;

};