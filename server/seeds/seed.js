const db = require("../config/connection");
const { Product, User } = require("../models");
const userSeeds = require("./userSeeds.json");
const productSeeds = require("./productSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Product", "products");

    await Product.create(productSeeds);

    console.log("Products seeded");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
