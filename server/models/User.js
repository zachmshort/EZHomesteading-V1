const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  profilePic: { type: String },
  username: { type: String, required: true }, //will also be farm name for co-ops
  password: { type: String, required: true },
  email: { type: String, required: true },
  userProducts: [
    {
      type: Schema.Types.ObjectId,
      ref: "item",
    },
  ],
  address: { type: String },
  hoursOfOperation: { type: String },
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "item",
    },
  ],
  transactionHistory: { type: String },
  userType: { type: String },
});

const User = model("User", userSchema);
module.exports = User;
