import express from "express";
//import path from "path";
import logger from "morgan";
import createError from "http-errors";
import "./config/mongo"; // initialize mongo process (create Database and create Users model)

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", (req, res) => {
  res.send("Hello World");
});

app.use((req, res, next) => {
  next(createError(404));
});

export default app;
