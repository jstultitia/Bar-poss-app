const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
