const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

// describe test
describe("Nesting records", () => {
  beforeEach(done => {
    mongoose.connection.collection.authors.drop(() => done());
  });

  // create an author with one book
  it("Creates author with nested books", done => {
    let pat = new Author({
      name: "Patrick",
      books: [{ title: "Books one", pages: 300 }]
    });
    pat.save().then(() => {
      Author.findOne({ name: "Patrick" }).then(record => {
        assert(record.books.length === 1);
        done();
      });
    });
  });

  // add one book to existing author
  it("Adds a book to an author", done => {
    let pat = new Author({
      name: "Patrick",
      books: [{ title: "Books one", pages: 300 }]
    });
    pat.save().then(() => {
      Author.findOne({ name: "Patrick" }).then(record => {
        assert(record.books.length === 2);
        done();
      });
    });
  });
});
