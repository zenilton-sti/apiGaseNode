const Sequelize = require('sequelize');
const database = require('../db');
const CEV_responsaveis = require('./CEV_responsaveis');

const CEV_filho = database.define('CEV_filho', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    data_nasc: Sequelize.DATE,

    sexo: Sequelize.STRING,

    nacionalidade: Sequelize.STRING,

    cert_nasc: Sequelize.STRING,

    cpf: Sequelize.STRING,

    endereco: Sequelize.JSON,

    contato: Sequelize.JSON,
})

CEV_filho.belongsTo(CEV_responsaveis,{
    constraint: true,
    foreignKey: 'id_responsavel'
})

CEV_responsaveis.hasMany(CEV_filho,{
    foreignKey: 'id_responsavel'
})

module.exports = CEV_filho;