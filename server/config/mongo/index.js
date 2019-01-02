import mongoose from "mongoose";
import userSchema from "./Schema/userSchema";
import passwordSchema from "./Schema/passwordSchema";

const host = "localhost";
const port = "27017";
const db = "mydb";
mongoose.connect(
  `mongodb://${host}:${port}/${db}`,
  { useNewUrlParser: true }
);

export const User = mongoose.model("User", userSchema);
export const Password = mongoose.model("Password", passwordSchema);
// User.create(
//   {
//     username: "admin",
//     password: "secret",
//     email: "kenneth.enriquez@gmail.com"
//   },
//   err => {
//     if (err) return console.log("User", "Already Exists");
//   }
// );

// Password.create(
//   {
//     userId: "5c2c54dae0b6e61fc0f4bcc8",
//     socialPassword: []
//   },
//   err => {
//     if (err) return console.log("Password Document", "Already Exists");
//   }
// );

// const socialPassword = {
//   title: "facebook",
//   url: "facebook.com",
//   password: "fr3m@r0189",
//   username: "achilles16"
// };

// Password.findOneAndUpdate(
//   { userId: "5c2c54dae0b6e61fc0f4bcc8" },
//   { socialPassword: [socialPassword] },
//   err => {
//     if (err) return console.log(err);
//     return console.log("succesfully saved");
//   }
// );
