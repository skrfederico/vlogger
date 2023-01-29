const mongoose = require('mongoose')

//when we use mongoose we need to make a Schema
const vlogSchema = new mongoose.Schema(
  {
    //we need to pass an argument because we need a constructor that takes an object
    //make sure you have an item with a type and required
    title: { type: String, required: true },
    date: { type: String, required: true },
    body: [String],
    newContent: { type: Boolean, default: true },
    videolink: { type: String },
    videopassword: { type: String }
  },
  { timestamps: true }
)

console.log(vlogSchema.createdAt)
//default to True
//found this online
//mongoose.Schema.Types.Boolean.convertToFalse

// mongoose.Schema.newContent.Boolean.convertToTrue

//always make sure you can export it
const Vlog = mongoose.model('Vlog', vlogSchema)

module.exports = Vlog
