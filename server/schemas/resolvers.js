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
  },

  //   Mutation: {},
};

module.exports = resolvers;
