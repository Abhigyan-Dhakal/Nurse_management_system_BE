import jwt from "jsonwebtoken";

import Token from "../domain/Token";
import Success from "../domain/Success";

export const generateToken = async (
  refreshToken: string,
  userId: number
): Promise<Success<Token>> => {
  try {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string);

    const accessToken = jwt.sign(
      {
        user_id: userId,
      },
      process.env.ACCESS_TOKEN_SECRET as string,
      {
        expiresIn: "45s",
      }
    );

    const newRefreshToken = jwt.sign(
      {
        user_id: userId,
      },
      process.env.REFRESH_TOKEN_SECRET as string
    );

    return {
      data: { access: accessToken, refresh: newRefreshToken, user_id: userId },
      message: "Token Regenerated!",
    };
  } catch (err) {
    return {
      message: "Invalid Refresh Token!",
    };
  }
};
