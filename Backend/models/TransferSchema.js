const mongoose = require("mongoose");

let TransactionSchema = new mongoose.Schema({
  from: {
    type:mongoose.Types.ObjectId,
    required:true,
    ref:'CUSTOMERS'
  },
  to: {
    type:mongoose.Types.ObjectId,
    required:true,
    ref:'CUSTOMERS'
  },
  amount: {
    type:Number,
    required:true,
  },
  statement:{
    type:String,
    default:""
  }
  },{timestamps:true});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
