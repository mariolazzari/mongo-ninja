const mocha = require("mocha");
const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("saving data", () => {
  it("Save a record to DB", done => {
    var char = new MarioChar({
      name: "Mario",
      weigth: 75
    });

    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });
});
