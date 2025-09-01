const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.NODE_ENV === 'test' ? ':memory:' : 'database.sqlite',
  logging: false,
});

const Product = require('./Product')(sequelize);
const Recipe = require('./Recipe')(sequelize);
const StockItem = require('./StockItem')(sequelize);

Product.hasOne(StockItem, { onDelete: 'CASCADE' });
StockItem.belongsTo(Product);

Recipe.belongsToMany(Product, { through: 'RecipeProducts' });
Product.belongsToMany(Recipe, { through: 'RecipeProducts' });

module.exports = {
  sequelize,
  Product,
  Recipe,
  StockItem,
};
