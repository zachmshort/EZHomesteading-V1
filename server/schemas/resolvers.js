const { Item, Product, User } = require("../models");

const resolvers = {
  Query: {
    Products: async () => {
      return Product.find().sort({ createdAt: -1 });
    },

    Items: async () => {
      return Item.find().sort({ createdAt: -1 });
    },

    Users: async () => {
      return User.find().sort({ createdAt: -1 });
    },

    User: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    Item: async (parent, { itemId }) => {
      return Item.findOne({ _id: itemId });
    },
    //get all items for overall shop page
    //find all items within a given shelf life range/perishability
    //find all items by category
    //find all items by sub category
  },

  Mutation: {
    //add cart item
    //add user product item
    //add user
    addUser: async (parent, { username, password, email }) => {
      //need to pass user.username, user.password, and user.email
      return User.create({ username, password, email });
    },
    //different route to add a co-op user, or same route? different required fields
    //add item
    addItem: async (
      parent,
      { name, category, subCategory, quantityType, stock, shelfLife, price }
    ) => {
      //need to pass item.name, item.category, item.subcategory, item.quantityType, item.stock, item.shelfLife, item.price
      return Item.create({
        name,
        category,
        subCategory,
        quantityType,
        stock,
        shelfLife,
        price,
      });
    },
  },
};

module.exports = resolvers;
