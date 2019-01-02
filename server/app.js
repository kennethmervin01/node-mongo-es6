import express from "express";
//import path from "path";
import logger from "morgan";
import createError from "http-errors";
import "./config/passport";
import { Password } from "./config/mongo";
import authRoutes from "./routes/auth";
import passport from "./middlewares/isAuthorize";

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  Password.find()
    .then(data => res.send(JSON.stringify(data)))
    .catch(err => console.log(err));
});

app.use((req, res, next) => {
  next(createError(404));
});

export default app;
