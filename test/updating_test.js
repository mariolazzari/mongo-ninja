const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Updating records", () => {
  let char;
  beforeEach(done => {
    char = new MarioChar({
      name: "Mario",
      weight: 50,
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
  it("Updates one record in DB", done => {
    MarioChar.findOneAndUpdate({ name: "Mario" }, { name: "Luigi" })
      .then(() => {
        MarioChar.findOne({ _id: char._id })
          .then(res => {
            assert(res.name === "Luigi");
            done();
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });

  // increment weigth
  it("Increments weigth by one", done => {
    MarioChar.update({}, { $inc: { weight: 1 } }),
      then(() => {
        MarioChar.findOne({ name: "Mario" }).then(res => {
          assert(res.weight === 51);
          done();
        });
      });
  });
});
