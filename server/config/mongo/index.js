import mongoose from "mongoose";
import userSchema from "./userSchema";

const host = "localhost";
const port = "27017";
const db = "mydb";
mongoose.connect(
  `mongodb://${host}:${port}/${db}`,
  { useNewUrlParser: true }
);

const Users = mongoose.model("Users", userSchema);

Users.create(
  {
    username: "admin",
    password: "secret",
    email: "kenneth.enriquez@gmail.com"
  },
  err => {
    if (err) return console.log("Already Exists");
  }
);
