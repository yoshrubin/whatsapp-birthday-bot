var mongoose = require("mongoose");

var PersonSchema = new mongoose.Schema(
  {
    name: String,
    birthday: Date,
  },
  { timestamps: true }
);

// Requires population of seller
PersonSchema.methods.toJSONFor = function () {
  return {
    id: this._id,
    name: this.name,
    birthday: this.birthday,
    createdAt: this.createdAt,
  };
};

mongoose.model("Person", PersonSchema);
