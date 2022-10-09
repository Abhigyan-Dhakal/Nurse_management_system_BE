import Login from "../domain/Login";
import Success from "../domain/Success";
import Token from "../domain/Token";
import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 *
 * @param loginDetails
 * @returns
 */
export const login = async (loginDetails: Login): Promise<Success<Token>> => {
  const user = await UserModel.getUserByEmail(loginDetails.email);

  if (!user) {
    return {
      message: "Invalid Email or password!",
    };
  }

  const checkPasswordMatch = await bcrypt.compare(
    loginDetails.password,
    user.password
  );

  if (!checkPasswordMatch) {
    return {
      message: "Incorrect Password!",
    };
  }

  const accessToken = jwt.sign(
    {
      user_id: user.user_id,
    },
    process.env.ACCESS_TOKEN_SECRET as string,
    {
      expiresIn: "40s",
    }
  );

  const refreshToken = jwt.sign(
    {
      user_id: user.user_id,
    },
    process.env.REFRESH_TOKEN_SECRET as string
  );

  return {
    data: {
      access: accessToken,
      refresh: refreshToken,
      user_id: user.user_id,
    },
    message: "User Logged In!",
  };
};
