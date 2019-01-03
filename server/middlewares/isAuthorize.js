import passport from "passport";
import passportJWT from "passport-jwt";
import path from "path";
import fs from "fs";

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;
const publicKey = fs.readFileSync(
  path.resolve(__dirname, "../config/keys/public.pem")
);

const passportSetUp = process => {
  const myStrategy = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: publicKey,
    issuer: process.env.ISSUER,
    audience: process.env.AUDIENCE,
    algorithms: [process.env.ALGORITHM]
  };
  return passport.use(
    new JWTStrategy(myStrategy, (payload, done) => {
      return done(null, payload);
    })
  );
};

export default passportSetUp;
