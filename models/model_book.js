// mongoose library
var mongoose = require("mongoose");

// Defining an URL Schema
const bookSchema = mongoose.Schema({
// do not put _id. let it create by it own 
  title: String,
  created: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model("Model", bookSchema);   // "Model" should be a singular. A kind of convention
module.exports = Book;
