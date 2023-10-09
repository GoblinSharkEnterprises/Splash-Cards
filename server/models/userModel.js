const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create User Schema for storing username, password, and sets associated with that username
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sets: [{ type: Schema.Types.ObjectId, ref: "set" }],
});

// create user Model to export
const User = mongoose.model("User", userSchema);

module.exports = User;
