const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Finding records", () => {
  let char;
  beforeEach(done => {
    char = new MarioChar({
      name: "Mario"
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
  it("Finds one record from DB", () => {
    MarioChar.findOne({ name: "Mario" })
      .then(res => {
        assert(res.name === "Mario");
      })
      .catch(err => console.log(err));
  });

  // find by id
  it("Finds one record from DB by ID", () => {
    MarioChar.findById({ _id: char._id }).then(res => {
      assert(res._id.toString() === char._id.toString());
    });
  });
});
