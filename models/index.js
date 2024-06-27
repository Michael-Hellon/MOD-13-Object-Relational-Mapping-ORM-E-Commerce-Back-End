// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Referenced One-to-one, One-to-Many exercise
// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.belongsTo(Product, {
  foreignKey: 'product_id',
});

// Referenced https://sequelize.org/docs/v6/core-concepts/assocs/#foobelongstomanybar--through-baz-

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    foreignKey: 'product_id',
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    foreignKey: 'tag_id',
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
