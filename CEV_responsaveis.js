const Sequelize = require('sequelize');
const database = require('../db');

const CEV_responsaveis = database.define('CEV_responsaveis', {
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

    nacionalidade: Sequelize.STRING,

    cpf: Sequelize.STRING,

    doc: Sequelize.STRING,

    endereco: Sequelize.JSON,

    contato: Sequelize.JSON,
})

module.exports = CEV_responsaveis;