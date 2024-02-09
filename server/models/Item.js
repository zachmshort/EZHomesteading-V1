const { Schema, model } = require("mongoose");
//items are linked to a single co-op user who is selling the specific items

const itemSchema = new Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  quantityType: { type: String, required: true },
  stock: { type: Number, required: true },
  shelfLife: { type: Number, required: true },
  price: { type: Number, required: true },
  productPic: { type: String },
});

const Item = model("Item", itemSchema);
module.exports = Item;
