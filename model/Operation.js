const {Schema, model} = require("mongoose")

const Operation = new Schema({
  date: {type: Date, required: false},
  value: {type: Number, required: false},
  adding: {type: Boolean, required: false},
  writingDateTime: {type: Date, required: false},
})

module.exports = model('Operation', Operation)
