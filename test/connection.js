const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/testaroo");
mongoose.connection
  .once("open", () => {
    console.log("DB connection open");
  })
  .on("error", error => {
    console.log("DB error: " + error);
  });
