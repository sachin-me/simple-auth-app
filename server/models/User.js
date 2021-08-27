const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

UserSchema.pre("save", function (next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, SALT_ROUNDS);
    next();
  } else {
    next();
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
