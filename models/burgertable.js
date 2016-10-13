'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgertable = sequelize.define('burgertable', {
    burgerid: DataTypes.INTEGER,
    burgername: DataTypes.STRING,
    devoured: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burgertable;
};