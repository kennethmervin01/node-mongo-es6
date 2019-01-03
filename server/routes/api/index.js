import express from "express";
import { getUser, createUser, updateUser } from "./users";
import { getPassword, getOnePassword } from "./passwords";

const router = express.Router();

router.get("/users", getUser);
router.post("/users", createUser);
router.put("/users", updateUser);

router.get("/passwords", getPassword);
router.get("/passwords/user/:userID", getOnePassword);

export default router;
