import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../mongo";

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    (req, username, password, cb) => {
      return User.findOne({ username })
        .then(user => {
          console.log(typeof user);
          if (!user) {
            return cb(null, false, {
              message: "Incorrect username or password."
            });
          }
          return cb(null, user, {
            message: "Logged In Successfully"
          });
        })
        .catch(err => cb(err));
    }
  )
);
