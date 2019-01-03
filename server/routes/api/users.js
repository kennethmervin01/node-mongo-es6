import { User } from "@mongoDB";
//import createError from "http-errors";

export const getUser = (req, res) => {
  User.find().then(data => {
    res.send(data);
  });
};

export const createUser = (req, res) => {
  User.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

export const updateUser = (req, res) => {
  let id = "5c2dc45202efa3146887ffe0";
  let update = { email: "test1@gmail.com" };
  let toUpdate = User.findOneAndUpdate({ _id: id }, update, { new: true });
  toUpdate.then(data => res.send(data)).catch(err => res.send(err));
};
