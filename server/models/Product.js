const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  shelfLife: { type: Number, required: true },
  suggestPrice: { type: Number, required: true },
  suggestedUnits: { type: String, required: true },
  productPic: { type: String },
});

const Product = model("Product", productSchema);
module.exports = Product;
