const juegoModel = require("../model/usuario");

module.exports.addGame = async (game) => {
    await juegoModel.add(game);
    return "Siuuuuu";
  };

// module.exports.addUserMane = async(user)=>{
//     let res = await userModel.addUser(user)
//     console.log(res)
//     return 'Siuuuuuuuuuuuuuuuu'
// }