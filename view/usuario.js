const gameController = require("../controller/usuario");

module.exports =(app)=>{


    // //Ver Usuarios
     app.get('/agregar', (req,res)=>{
        console.log('Hola esto es agregar')
     })

    //Agregar usuario
    app.post("/usuario", async (req, res) => {
        let juego = req.body;
        console.log(juego);
        let result = await gameController.addGame(juego);
        res.json(result);
      });

}