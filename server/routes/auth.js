import express from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import path from "path";
import fs from "fs";

const privateKEY = fs.readFileSync(
  path.resolve(__dirname, "../config/keys/private.pem"),
  "utf8"
);

const router = express.Router();

router.post("/", (req, res) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user: user,
        comments: info
      });
    }

    req.login(user, { session: false }, err => {
      if (err) {
        return res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response

      // SIGNING OPTIONS
      var signOptions = {
        issuer: process.env.ISSUER,
        audience: process.env.AUDIENCE,
        expiresIn: process.env.JWTEXPIRY,
        algorithm: process.env.ALGORITHM
      };
      const token = jwt.sign(user.toJSON(), privateKEY, signOptions);
      return res.json({ user, token });
    });
  })(req, res);
});

export default router;
