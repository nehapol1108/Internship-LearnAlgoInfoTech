const mongoose = require("mongoose");

let customers = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  balance:{
    type:Number,
    required:true
  },
});

const Customer = mongoose.model("CUSTOMERS", customers);

module.exports = Customer;