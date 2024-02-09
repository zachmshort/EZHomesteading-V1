const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, required: true },
  shelfLife: { type: Number, required: true },
  suggestPrice: { type: Number, required: true },
  suggestedUnits: { type: String, required: true },
  productPic: { type: String },
});

const Product = mongoose.model("Product", productSchema);

const handleError = (err) => console.error(err);

Product.create({
  name: Banana,
  shelfLife: 3,
  suggestPrice: 0.25,
  suggestedUnits: EA,
  picture: "",
})
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));
module.exports = Product;
