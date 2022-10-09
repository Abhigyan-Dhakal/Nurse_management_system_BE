import db from "../db/db";
import NurseDetails, { NurseToInsert } from "../domain/Nurse";

class NurseModel {
  public static table = "nurse";

  /**
   * Model for getting all nurses
   * @param authUser
   * @returns
   */
  public static async getAllNurses(
    authUser: number | undefined
  ): Promise<NurseDetails[]> {
    const nurses = await db(NurseModel.table)
      .where({ user_id: authUser })
      .select();

    return nurses;
  }

  /**
   * Model for getting a individual nurse details
   * @param nurseId
   * @param authUser
   * @returns
   */
  public static async getNurse(
    nurseId: number,
    authUser: number | undefined
  ): Promise<NurseDetails> {
    const nurse = await db(NurseModel.table)
      .where({
        nurse_id: nurseId,
        user_id: authUser,
      })
      .select()
      .first();

    return nurse;
  }

  /**
   * Model for adding nurse to the database
   * @param nurseDetails
   * @returns
   */
  public static async addNurse(
    nurseDetails: NurseToInsert
  ): Promise<NurseDetails[]> {
    const nurse = await db(NurseModel.table)
      .insert(nurseDetails)
      .returning("*");

    return nurse;
  }

  /**
   * Model for checking nurse owner in the database
   * @param nurseId
   * @param authUser
   * @returns
   */
  public static async checkNurseDetailsOwner(
    nurseId: number,
    authUser: number | undefined
  ): Promise<NurseDetails> {
    const owner = await db(NurseModel.table)
      .where({ nurse_id: nurseId, user_id: authUser })
      .select()
      .first();

    return owner;
  }

  /**
   * Model for removing nurse from the database
   * @param nurseId
   * @param authUser
   */
  public static async removeNurse(
    nurseId: number,
    authUser: number | undefined
  ): Promise<void> {
    await db(NurseModel.table)
      .where({ nurse_id: nurseId, user_id: authUser })
      .delete();
  }

  /**
   * Model to update nurse details
   * @param nurseDetails
   * @returns
   */
  public static async updateNurse(
    nurseDetails: NurseDetails
  ): Promise<NurseDetails[]> {
    const updatedDetails = await db(NurseModel.table)
      .where({
        nurse_id: nurseDetails.nurse_id,
        user_id: nurseDetails.user_id,
      })
      .update(nurseDetails)
      .returning([
        "nurse_id",
        "name",
        "email",
        "isRoundingManager",
        "workingDays",
        "dutyStartTime",
        "dutyEndTime",
        "address",
        "contact",
        "user_id",
      ]);

    return updatedDetails;
  }
}

export default NurseModel;
