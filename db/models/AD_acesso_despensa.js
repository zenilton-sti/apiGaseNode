const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AD_acesso_despensa', {
    id_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'AD_usuario',
        key: 'id'
      }
    },
    id_despensa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'LG_despensa',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    id_municipio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AD_acesso_despensa',
    timestamps: false,
    indexes: [
      {
        name: "uniq_acesssoescola",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
          { name: "id_despensa" },
        ]
      },
      {
        name: "idx_fk-user_as1",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "idx_fkescola_es1",
        using: "BTREE",
        fields: [
          { name: "id_despensa" },
        ]
      },
      {
        name: "id_municipio",
        using: "BTREE",
        fields: [
          { name: "id_municipio" },
        ]
      },
    ]
  });
};
