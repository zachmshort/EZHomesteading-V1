const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  profilePic: { type: String },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  }, //will also be farm name for co-ops
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  userProducts: [
    {
      type: String,
      ref: "item",
    },
  ],
  address: { type: String },
  hoursOfOperation: { type: String },
  cart: [
    {
      type: String,
      ref: "item",
    },
  ],
  transactionHistory: [
    {
      type: String,
      ref: "item",
    },
  ],
  userType: { type: String },
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);
module.exports = User;
