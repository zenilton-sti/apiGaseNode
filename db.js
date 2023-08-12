const Sequelize = require('sequelize');
const sequelize = new Sequelize ('bd001', 'apiPS', 'api2021PSS', {

    dialect: 'mysql',
    host: '45.132.241.184',
    port: 3306,
    
})

module.exports = sequelize;