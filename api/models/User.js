const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: false,
    },
    lastname: {
      type: String,
      required: true,
      unique: false,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    about: {
      type: String,
      default: "",
    },
    birthday: {
      type: String,
      default: "",
    },
    designation: {
      type: String,
      default: "",
    },
    pronouns: {
      type: String,
      default: "",
    },
    interests: {
      type: String,
      default: "",
    },
    tagline: {
      type: String,
      default: "",
    },
    works: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);