import User, { UserToInsert } from "../domain/User";
import db from "../db/db";

class UserModel {
  public static table = "user_account";

  /**
   * Model for create a new user
   * @param userDetails
   * @returns
   */
  public static async createUser(userDetails: UserToInsert): Promise<User[]> {
    const newUser = await db(UserModel.table)
      .insert(userDetails)
      .returning("*");

    return newUser;
  }
  /**
   * Model for getting user id by email
   * @param email
   * @returns
   */
  public static async getUserByEmail(email: string): Promise<User> {
    const user = await db(UserModel.table)
      .where({ email: email })
      .select()
      .first();

    return user;
  }
}

export default UserModel;
