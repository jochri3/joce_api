const mongoose = require("mongoose");

const Employee = mongoose.model(
  "Employee",
  new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    mname: { type: String },
    age: { type: Number },
    title: { type: [String] }
  })
);

module.exports = Employee;
