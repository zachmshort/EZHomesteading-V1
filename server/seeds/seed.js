const db = require("../config/connection");
const { Product, User, Item } = require("../models");
const userSeeds = require("./userSeeds.json");
const itemSeeds = require("./itemSeeds.json");
const productSeeds = require("./productSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Product", "products");
    await cleanDB("Item", "items");
    await cleanDB("User", "users");

    await Product.create(productSeeds);
    await User.create(userSeeds);
    await Item.create(itemSeeds);

    console.log("homesteadingDB seeded");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
