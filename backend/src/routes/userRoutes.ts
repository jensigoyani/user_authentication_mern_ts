import { Router } from "express";
import {
  login,
  register,
  userLists,
  userProfile,
} from "../controller/userController";

const userRouter = Router();

userRouter.post("/register", register);

userRouter.post("/login", login);

userRouter.get("/profile", userProfile);

userRouter.get("/list", userLists);

export default userRouter;
