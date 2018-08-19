const mongoose = require("mongoose");

// use es6 promises
mongoose.Promise = global.Promise;

// Connect to db before making tests
before(done => {
  // MongoDB connection
  mongoose
    .connect(
      "mongodb://localhost:27017/testaroo",
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("MongoDB connected");
      done();
    })
    .catch(err => console.log("MongoDB connection error", err));
});

// Drop collection before each test
beforeEach(() => {
  mongoose.connection.collections.mariochars
    .drop()
    .then(() => {
      console.log("mariochars collection dropped");
    })
    .catch(err =>
      console.log("Error while dropping mariochars collection", err)
    );
});
