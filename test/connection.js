const mongoose = require("mongoose");

// use es6 promises
mongoose.Promise = global.Promise;

// Connect to db before making tests
before(done => {
  // MongoDB connection
  mongoose
    .connect(
      "mongodb://localhost/testaroo",
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("MongoDB connected");
      done();
    })
    .catch(err => console.log("MongoDB connection error", err));
});

/*
mongoose.connection
  .once("open", () => {
    console.log("DB connection open");
  })
  .on("error", error => {
    console.log("DB error: " + error);
  });
*/
