const { Item, Product, User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    Products: async () => {
      return Product.find().sort({ createdAt: -1 });
    },
    //get all items for overall shop page
    Items: async () => {
      return Item.find().sort({ createdAt: -1 });
    },

    Users: async () => {
      return User.find().sort({ createdAt: -1 });
    },

    //get one user by id
    User: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    //get one item by id
    Item: async (parent, { itemId }) => {
      return Item.findOne({ _id: itemId });
    },

    //find all items within a given shelf life range/perishability
    //find all items by category
    itemsByCategory: async (parent, { category }) => {
      return Item.find({ category: category }).sort({ createdAt: -1 });
    },

    //find all items by subcategory
    itemsBySubCategory: async (parent, { subCategory }) => {
      return Item.find({ subCategory: subCategory }).sort({ createdAt: -1 });
    },
    //find all items by sub category
  },

  Mutation: {
    //add cart item
    addCartItem: async (parent, { userId, itemId, cart }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { cart: [...cart, itemId] },
        { new: true }
      );
    },

    //delete user
    deleteCartItem: async (parent, { userId, itemId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { cart: itemId } },
        { new: true }
      );
    },

    //add user product item
    addProductItem: async (parent, { userId, itemId, userProducts }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { userProducts: [...userProducts, itemId] },
        { new: true }
      );
    },

    //delete product item
    deleteProductItem: async (parent, { userId, itemId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { userProducts: itemId } },
        { new: true }
      );
    },

    //add user
    addUser: async (parent, { username, password, email }) => {
      //need to pass user.username, user.password, and user.email
      const user = await User.create({ username, password, email });
      const token = signToken(user);

      return { token, user };
    },

    //login, isCorrectPassword method is on the User model
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    //update a user
    updateUser: async (
      parent,
      {
        userId,
        profilePic,
        username,
        password,
        email,
        address,
        hoursOfOperation,
        userType,
      }
    ) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          profilePic,
          username,
          password,
          email,
          address,
          hoursOfOperation,
          userType,
        },
        { new: true }
      );
    },

    //delete user
    deleteUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },

    //different route to add a co-op user, or same route? different required fields
    //add item
    addItem: async (
      parent,
      {
        name,
        category,
        subCategory,
        quantityType,
        stock,
        shelfLife,
        price,
        userId,
      }
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
        userId,
      });
    },

    //update item listing
    updateItem: async (
      parent,
      { itemId, name, quantityType, stock, shelfLife, price }
    ) => {
      return Item.findOneAndUpdate(
        { _id: itemId },
        {
          name,
          quantityType,
          stock,
          shelfLife,
          price,
        },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
