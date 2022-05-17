const {Schema, model} = require("mongoose")

const Operation = new Schema({
  text: {type: String, required: true},
})

module.exports = model('Operation', Operation)
