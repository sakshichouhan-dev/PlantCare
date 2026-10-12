const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const Listing = require("./model/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

main()
.then( () => {
 console.log("connected sucessfilly");
})
.catch((err) =>{
  console.log(err);
});

async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/PlantCare');
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}) );
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


app.get("/", (req,res) =>{
  res.render("listings/index");
});


// Scan route
app.get("/scan", (req, res) => {
   res.render("listings/scan");
});


// Results route
app.get("/results", (req, res) => {
  const result = {
    plantName: "Tomato plant",
    scientificName: "Solanum lycopersicum",
    health: "Nitrogen deficiency",
    fertilizer: { name: "Nitrogen mix", price: 299 },
  };
  res.render("listings/results", { result });
});


// login and signup routes
app.get("/login", (req, res) => {
  res.render("listings/login");
});

app.get("/signup", (req, res) => {
  res.render("listings/signup");
});


// Shop route
app.get("/shop", (req, res) => {
  const products = [
    { id: 1, name: "Nitrogen mix", price: 299, info: "For leafy plants" },
    { id: 2, name: "Organic compost", price: 199, info: "For all plants" },
    { id: 3, name: "Bloom booster", price: 349, info: "For flowering plants" },
    { id: 4, name: "Root strength", price: 249, info: "For young plants" },
  ];
  res.render("listings/shop", { products });
});


// About route
app.get("/about", (req, res) => {
  res.render("listings/about");
});


//cart route
app.get("/cart", (req, res) => {
  const items = [
    { name: "Nitrogen mix", price: 299, qty: 1 },
    { name: "Organic compost", price: 199, qty: 2 },
  ];
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  res.render("listings/cart", { items, total });
});


//order-success route
app.get("/order-success", (req, res) => {
  res.render("listings/order-success");
});

app.listen(8080, () =>{
  console.log("server is listening");
});
