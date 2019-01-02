import express from "express";
import jwt from "jsonwebtoken";
import passport from "passport";

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
      const token = jwt.sign(user.toJSON(), "mcdo1234");
      return res.json({ user, token });
    });
  })(req, res);
});

export default router;
