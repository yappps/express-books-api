// mongoose library
var mongoose = require("mongoose");
// opening a connection to a database

// Defining an URL Schema
const bookSchema = mongoose.Schema({
// do not put _id. let it create by it own 
  title: String,
  created: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model("Model", bookSchema);
module.exports = Book;
