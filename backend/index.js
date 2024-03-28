const express = require("express");
const cors = require("cors");
const app = express();
const equipme = require("./Data/products.json");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send(equipme);
});
app.get("/equipme", (req, res) => {
  res.send("Welcom to our online shop API");
});
const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(`Server is running on port ${port}`)
);
