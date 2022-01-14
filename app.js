const express = require('express')
const app = express();
const sequelize = require('./db/db')
const juegosView = require("./view/usuario");

app.use(express.json());

let serverStart =  async() => {
    try {
     await sequelize.authenticate();
      console.log("Conectado a Mysql");
  
      app.listen(3000, () => {
        console.log(
          "Bienvenido Teclanauta"
        );
      });
    } catch (error) {
      console.log(`Error en el SQL: ${error}`);
    }
  };
  
  serverStart();

  juegosView(app)