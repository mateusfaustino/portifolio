const sequelize = require('sequelize');
const connection = new sequelize('portifolio','root','9877zx',{
    host:'localhost',
    dialect:'mysql'
})   

module.exports = connection;