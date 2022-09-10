require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const modelVideogame = require("./models/Videogame.js");
const modelGenre = require("./models/Genre.js");
const hostname = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(`postgres://${user}:${password}@${hostname}:5432/videogames`,
  {
    logging: false, // establecer en console.log para ver las consultas SQL sin procesar
    native: false, // permite que Sequelize sepa que podemos usar pg-native para ~30% más de velocidad
  }
);

//conectamos los modelos con la db
modelVideogame(sequelize);
modelGenre(sequelize);

// Para relacionarlos hacemos un destructuring
const { videogame, genre } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews)
videogame.belongsToMany(genre, { through: 'videogame_genres' });
genre.belongsToMany(videogame, { through: "genres_videogame" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize,
  Op,
};
