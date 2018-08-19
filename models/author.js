const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Book schema
const BookSchema = new Schema({
  name: String,
  pages: Number
});

// Author schema
const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema] // nesting schema
});

const Author = mongoose.model("author", AuthorSchema);

module.exports = Author;
