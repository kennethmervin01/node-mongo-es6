import passport from "passport";
import passportJWT from "passport-jwt";
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "mcdo1234"
    },
    (payload, done) => {
      return done(null, payload);
    }
  )
);

export default passport;
