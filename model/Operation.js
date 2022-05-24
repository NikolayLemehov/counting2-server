const {Schema, model} = require("mongoose")

const Operation = new Schema({
  date: {type: Date, required: false},
  value: {type: String, required: false},
  adding: {type: Boolean, required: false},
})

module.exports = model('Operation', Operation)
