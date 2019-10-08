const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      //   if (value.toLowerCase.include("password")) {
      //     throw new Error("password can't use for the password");
      //   }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must me a positive number");
      }
    }
  }
});

userSchema.statics.findByCrendentials = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Unable to login");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Unable to login");

  return user;
};

// Hash the password
userSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) user.password = await bcrypt.hash(user.password, 8);

  next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
