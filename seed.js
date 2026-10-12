const mongoose = require("mongoose");
const Product = require("./models/product");

const MONGO_URL = "YAHAN_APNA_MONGO_URL_DAALO";

const products = [
  { name: "Nitrogen mix", price: 299, info: "For leafy plants" },
  { name: "Organic compost", price: 199, info: "For all plants" },
  { name: "Bloom booster", price: 349, info: "For flowering plants" },
  { name: "Root strength", price: 249, info: "For young plants" },
];

async function seed() {
  await mongoose.connect(MONGO_URL);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Products saved");
  await mongoose.connection.close();
}

seed();