const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  profilePic: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  userProducts: [
    {
      type: Schema.Types.ObjectId,
      ref: "item",
    },
  ],
  address: { type: String, required: true },
  hoursOfOperation: { type: String, required: true },
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "item",
    },
  ],
  transactionHistory: { type: String },
  userType: { type: String, required: true },
});

const User = model("User", userSchema);

const handleError = (err) => console.error(err);

User.create({
  profilePic: "e",
  username: "testUser",
  password: "e",
  email: "test@hotmail.com",
  //userProducts: "e",
  address: "42 Wallaby Way, Sydney, Australia",
  hoursOfOperation: "e",
  //cart: "e",
  transactionHistory: "e",
  userType: "user",
})
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));
module.exports = User;
