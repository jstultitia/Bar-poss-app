const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('StockItem', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });
};
