import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: v => {
        this.model("User").find({ username: v }, (err, docs) => {
          console.log(docs.length == 0);
        });
      },
      message: "User already exists!"
    }
  },
  password: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
  email: { type: String, unique: true }
});

userSchema.pre("save", function(next) {
  let user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

// const Users = mongoose.model("Users", userSchema);

export default userSchema;
