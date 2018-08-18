const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Saving records", () => {
  it("Saves a record to DB", done => {
    var char = new MarioChar({
      name: "Mario",
      weigth: 75
    });

    char.save().then(() => {
      assert(char.isNew === false);
      done(); // move to next test
    });
  });
});
