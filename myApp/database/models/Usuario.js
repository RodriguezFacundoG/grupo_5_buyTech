const sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
      // Configuraciones de las columnas.




    }, {
    tableName: 'Usuarios',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false, //Si no tengo timestamps
    });
        return Usuario;