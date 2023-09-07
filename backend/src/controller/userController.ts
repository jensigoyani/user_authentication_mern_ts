import { NextFunction, Request, Response } from "express";
import {
  loginService,
  registerService,
  userListService,
  userProfileService,
} from "../services/userServices";

// REGISTER USER
const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      id,
      firstname,
      lastname,
      username,
      email,
      password,
      gender,
      birthdate,
    } = req.body;

    const newUser = await registerService(
      id,
      firstname,
      lastname,
      username,
      email,
      password,
      gender,
      birthdate
    );

    res.status(200).json({
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    next();
    res.status(500).json({
      status: false,
      error,
    });
  }
};

// LOGIN USER
const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const loginUser = await loginService(email, password);

    if ("error" in loginUser) {
      res.status(400).json({
        error: loginUser.error,
      });
    } else {
      res.status(200).json({
        user: loginUser,
      });
    }
  } catch (error) {
    console.log(error);
    next();
    res.status(500).json({
      status: false,
      error,
    });
  }
};

// USER PROFILE
const userProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = req.query.email as string;

    const profileUser = await userProfileService(email);

    res.status(200).json({
      user: profileUser,
    });
  } catch (error) {
    console.log(error);
    next();
    res.status(500).json({
      status: false,
      error,
    });
  }
};

// USER LIST
const userLists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userList = await userListService();

    res.status(200).json({
      user: userList,
    });
  } catch (error) {
    console.log(error);
    next();
    res.status(500).json({
      status: false,
      error,
    });
  }
};

export { register, login, userProfile, userLists };
