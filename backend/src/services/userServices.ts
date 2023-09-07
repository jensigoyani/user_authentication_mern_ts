import bcrypt from "bcrypt";
import users from "../models/user";
import { error } from "console";

const registerService = async (
  id: number,
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  password: string,
  gender: "male" | "female" | "other",
  birthdate: string
) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await users.create({
      id,
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      gender,
      birthdate,
    });

    return newUser;
  } catch (error) {
    throw error;
  }
};

const loginService = async (email: string, password: string) => {
  try {
    const loginUser = await users.findOne({
      where: { email },
    });

    if (!loginUser) {
      return { error: "User not found" };
    }

    console.log("loginUser", loginUser.dataValues);

    const isPasswordValid = await bcrypt.compareSync(
      password,
      loginUser.password
    );

    if (!isPasswordValid) {
      return { error: "Incorrect password" };
    }

    return loginUser;
  } catch (error) {
    throw error;
  }
};

const userProfileService = async (email: string) => {
  try {
    const userProfile = await users.findOne({
      where: { email },
    });

    if (!userProfile) {
      return null;
    }

    return userProfile;
  } catch (error) {
    throw error;
  }
};

const userListService = async () => {
  try {
    const userList = await users.findAll({});

    return userList;
  } catch (error) {
    throw error;
  }
};

export { registerService, loginService, userProfileService, userListService };
