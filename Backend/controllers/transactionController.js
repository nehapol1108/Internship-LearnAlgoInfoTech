const mongoose = require("mongoose");
const Customer = require("../models/CustomerSchema");
const Transaction = require("../models/TransferSchema");
module.exports.addTransaction = async (req, res) => {
  const { from, to, amount } = req.body;
  try {
    const fromCust = await Customer.findById(from);
    const toCust = await Customer.findById(to);
    if (fromCust.balance < amount)
      return res.status(400).send("Amount greater than balance");
    fromCust.balance -= amount;
    toCust.balance += amount;
    await fromCust.save();
    await toCust.save();
    let statement = `${amount} Rs transfered from ${fromCust.name} to ${toCust.name}`
    const newData = await Transaction.create({
      from,
      to,
      amount,
      statement
    });
    // newData = await newData.populate("from to");
    res.status(200).json(newData);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports.transferData = async (req, res) => {
  try {
    const data2 = await Transaction.find({}).populate("from to");
    res.status(200).json(data2);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
};
