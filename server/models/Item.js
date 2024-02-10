const { Schema, model } = require("mongoose");
//items are linked to a single co-op user who is selling the specific items

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  quantityType: { type: String, required: true },
  stock: { type: Number, required: true },
  shelfLife: { type: Number },
  price: { type: Number, required: true },
  productPic: { type: String },
  quantityType: { type: String, required: true },
  userId: { type: String, required: true },
});
//highly perishible: 3 day shelf life
//perishible: 2 week shelf life (14 days)
//less perishible: 3-6 weeks (42 days)

//have items searchable by perishability, have categories and sub categories like dairy -> milk, dairy -> eggs, etc.

const Item = model("Item", itemSchema);
module.exports = Item;
