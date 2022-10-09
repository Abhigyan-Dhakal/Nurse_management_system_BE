import Success from "../domain/Success";
import User, { UserToInsert } from "../domain/User";
import bcrypt from "bcrypt";
import UserModel from "../models/UserModel";

/**
 *
 * @param userDetails
 * @returns
 */
export const createUser = async (
  userDetails: UserToInsert
): Promise<Success<User>> => {
  const { password } = userDetails;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const insertedUser = await UserModel.createUser({
    ...userDetails,
    password: hashedPassword,
  });

  return {
    data: insertedUser,
    message: "User Added Successfully!",
  };
};
