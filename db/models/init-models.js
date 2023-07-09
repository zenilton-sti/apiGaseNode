var DataTypes = require("sequelize").DataTypes;
var _AD_acesso_despensa = require("./AD_acesso_despensa");

function initModels(sequelize) {
  var AD_acesso_despensa = _AD_acesso_despensa(sequelize, DataTypes);

  AD_acesso_despensa.belongsTo(AD_usuario, { as: "id_usuario_AD_usuario", foreignKey: "id_usuario"});
  AD_usuario.hasMany(AD_acesso_despensa, { as: "AD_acesso_despensas", foreignKey: "id_usuario"});
  AD_acesso_despensa.belongsTo(LG_despensa, { as: "id_despensa_LG_despensa", foreignKey: "id_despensa"});
  LG_despensa.hasMany(AD_acesso_despensa, { as: "AD_acesso_despensas", foreignKey: "id_despensa"});

  return {
    AD_acesso_despensa,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
