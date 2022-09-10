const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
     type: DataTypes.UUID,
     allowNull: false,
     primaryKey: true 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
    },
    released:{
      type: DataTypes.DATE,
    },
    rating:{
      type: DataTypes.FLOAT,
    },
    platforms:{
      type: DataTypes.ENUM(
        "PC",
        "Xbox 360",
        "Xbox One",
        "PlayStation",
        "PlayStation 4",
        "PlayStation 5",
        "PlayStation Store",
        "Epic Games",
        "Steam",
        "Other"
      ),
      defaultValue: "Other",
      allowNull: false
    }
  },
  {
    timestamps: false,
  });
};
