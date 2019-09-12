const mongoose = require("mongoose");

const Employee = mongoose.Schema(
  "Employee",
  new mongoose.Schema({
    fname: { type: String },
    lname: { type: String },
    mname: { type: String },
    age: { type: Number },
    title: { type: [String] }
  })
);

module.exports = Employee;
