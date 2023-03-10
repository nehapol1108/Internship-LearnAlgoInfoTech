const mongoose = require("mongoose");
const Customer = require("../models/CustomerSchema");

module.exports.addUser = async (req, res) => {
  try {
    const user = new Customer(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.getCustomerData = async (req, res) => {
  try {
    const data = await Customer.find({});
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Customer.findById(id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};