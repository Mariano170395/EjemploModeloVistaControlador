const sequelize = require("../db/db");
const usuario = require("../view/usuario");

let add = async (usuario) => {
    await sequelize.query(
      `INSERT INTO usuarios_crear (nombre, apellido) VALUES ('${usuario.nombre}', '${usuario.apellido}')`
    );
  };  

module.exports = add