'use strict';
module.exports = function(sequelize, DataTypes) {
  var usertable = sequelize.define('usertable', {
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usertable;
};