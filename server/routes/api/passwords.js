import { Password } from "@mongoDB";

export const getPassword = (req, res) => {
  Password.find().then(data => res.send(data));
};

export const getOnePassword = (req, res) => {
  let userId = req.params.userID;
  Password.findOne({ userId }).then(data => res.send(data));
};
