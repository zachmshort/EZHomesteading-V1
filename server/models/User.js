const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  profilePic: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: password, required: true },
  email: { type: email, required: true },
  userProducts: {},
  address: { type: String, required: true },
  hoursOfOperation: { type: String, required: true },
  cart: {},
  transactionHistory: {},
  userType: {},
});

const User = mongoose.model("User", userSchema);

const handleError = (err) => console.error(err);

User.create({
  profilePic: "",
  username: "testUser",
  password: "",
  email: "test@hotmail.com",
  userProducts: {},
  address: "42 Wallaby Way, Sydney, Australia",
  hoursOfOperation: "",
  cart: {},
  transactionHistory: {},
  userType: "user",
})
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));
module.exports = User;
