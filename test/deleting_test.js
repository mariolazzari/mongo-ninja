const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Deleting records", () => {
  let char;
  beforeEach(done => {
    char = new MarioChar({
      name: "Mario",
    });

    char
      .save()
      .then(() => {
        assert(char.isNew === false);
        done(); // move to next test
      })
      .catch(err => console.log("Error while saving mariochar", err));
  });

  // find one by name
  it("Deletes one record from DB", () => {
    MarioChar.findOneAndRemove({ name: "Mario" })
      .then(() => {
        MarioChar.findOne({ name: "Mario" }).then(res => {
          assert(res === null);
        });
      })
      .catch(err => console.log(err));
  });
});
