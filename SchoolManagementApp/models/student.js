const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  roll_number: {
    type: Number,
    require: true
  },
  first_name: {
    type: String,
    require: true
  },
  last_name: {
    type: String,
    require: true
  },
  sex: {
    type: Boolean,
    require: true
  }
});

const Student = (module.exports = mongoose.model("student", StudentSchema));
