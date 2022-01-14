const Sequelize = require('sequelize');

const sequelize  = new Sequelize('ejemplo_mane', 'root', null,{
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize