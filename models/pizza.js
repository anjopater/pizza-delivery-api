const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const PizzaSchema = new Schema(
  {
    id: Number,
    name: String,
    price: Number,
    imageUrl: String
  },
  { timestamps: true }
);


// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("pizza", PizzaSchema);