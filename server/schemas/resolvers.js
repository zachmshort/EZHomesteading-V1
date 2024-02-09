const { Item, Product, User } = require("../models");

const resolvers = {
  Query: {
    Products: async () => {
      return Product.find().sort({ createdAt: -1 });
    },

    // items: async () => {
    //   return Item.find().sort({ createdAt: -1 });
    // },

    // users: async () => {
    //   return User.find().sort({ createdAt: -1 });
    // },

    // user: async (parent, { userId }) => {
    //   return User.findOne({ _id: userId });
    // },
    // item: async (parent, { itemId }) => {
    //   return Item.findOne({ _id: itemId });
    // },
  },

  //   Mutation: {},
};

module.exports = resolvers;
